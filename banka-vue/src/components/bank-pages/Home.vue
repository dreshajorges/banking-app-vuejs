<template>
  <div :style="lightPhoto ? 'background-color: rgb(1,6,23)': 'background-color: rgb(1,13,47)'">



    <the-navbar @toggleLightPhoto="toggleLightPhoto"/>

    <div class="image-container">
      <img v-if="lightPhoto" src="./../../assets/wallpaperflare.com_wallpaper.jpg" class="background-image">
      <img v-else src="./../../assets/wallpaperflare%20(1).jpg" class="background-image">

      <div class="testimonials-overlay container text-center">
        <h2>What Our Clients Say</h2>
        <div class="row">
          <div class="col-md-4">
            <p>"BankName has been a great partner for my business."</p>
            <p><strong>- John Doe</strong></p>
          </div>
          <div class="col-md-4">
            <p>"Their customer service is top-notch."</p>
            <p><strong>- Jane Smith</strong></p>
          </div>
          <div class="col-md-4">
            <p>"I trust them with all my financial needs."</p>
            <p><strong>- Mark Wilson</strong></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="container text-center my-5 services ">
      <h2>Our Services</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon">
            <i class="fas fa-university"></i>
          </div>
          <h3>Personal Banking</h3>
          <p>Manage your personal finances with ease.</p>
        </div>
        <div class="col-md-4">
          <div class="icon">
            <i class="fas fa-briefcase"></i>
          </div>
          <h3>Business Banking</h3>
          <p>Solutions for businesses of all sizes.</p>
        </div>
        <div class="col-md-4">
          <div class="icon">
            <i class="fas fa-piggy-bank"></i>
          </div>
          <h3>Investment Services</h3>
          <p>Grow your wealth with our expert advice.</p>
        </div>
      </div>
    </div>


    <section class="pen">
      <div class="stage">
        <div
            class="element michael"
            :class="{ active: activeElement === 'michael', inactive: activeElement !== null && activeElement !== 'michael' }"
            @mouseover="setActive('michael')"
            @mouseleave="clearActive"
        ></div>
        <div
            class="element franklin"
            :class="{ active: activeElement === 'franklin', inactive: activeElement !== null && activeElement !== 'franklin' }"
            @mouseover="setActive('franklin')"
            @mouseleave="clearActive"
        ></div>
        <div
            class="element trevor"
            :class="{ active: activeElement === 'trevor', inactive: activeElement !== null && activeElement !== 'trevor' }"
            @mouseover="setActive('trevor')"
            @mouseleave="clearActive"
        ></div>
        <div
            class="element new-character"
            :class="{ active: activeElement === 'new-character', inactive: activeElement !== null && activeElement !== 'new-character' }"
            @mouseover="setActive('new-character')"
            @mouseleave="clearActive"
        ></div>
      </div>
    </section>

    <the-footer/>
  </div>







</template>

<script setup>
import { ref } from 'vue';
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";


    const lightPhoto = ref(true);

    function toggleLightPhoto() {
      lightPhoto.value = !lightPhoto.value;
    }















const activeElement = ref(null);

function setActive(element) {
  activeElement.value = element;
}

function clearActive() {
  activeElement.value = null;
}






</script>

<style scoped>

.arrow p{
  margin-bottom: 9px;
}

.arrow{
  font-size: 40px;
  background-color: rgb(64, 165, 120);
}




.founder{
  background: linear-gradient(to top, rgba(6, 74, 79, 0.5), rgb(6, 74, 79));
  color: white;
}

.card-founders{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8%;
  margin-top: 8%;

}

.image-container {
  position: relative;
  text-align: center;
}

.background-image {
  width: 100%;
  height: auto;
}

.testimonials-overlay {
  position: absolute;
  top: 10%;
  left:15%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

}

.testimonials-overlay h2 {
  margin-bottom: 2rem;
}

.testimonials-overlay .row {
  margin: 0;
  padding: 0;
}

.services{

  color: white;
}

.services .icon {
  font-size: 3rem;
  margin-bottom: 1rem;

}












@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);

.pen {
  max-width: 848px;
  width: 51.6%;
  margin: auto;
  margin-bottom: 8%;
  margin-top: 8%;
  opacity: 0;
  position: relative;
  transition: all 0.25s ease-in-out;
  animation: 1s appear 1 forwards;
}
.credit {
  display: block;
  max-width: 400px;
  text-align: center;
  margin: 150px auto 0;
  padding: 0;
  font-size: 0.8em;
  color: #f0f0f0;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.9);
}
.credit p a,
.credit a {
  color: white;
  text-decoration: none;
  font-weight: 700;
}
.credit p a:hover,
.credit a:hover,
.credit p a:active,
.credit a:active {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  color: white;
}
.credit p a.button,
.credit a.button {
  padding: 6px 12px;
  margin-top: 10px;
  background: #000000;
  border-radius: 3px;
}
.credit p a.button:hover,
.credit a.button:hover {
  background: #2b2b2b;
}
.credit p:last-of-type {
  margin-bottom: 30px;
}
.stage {
  max-width: 848px;
  width: 100%;
  height: 400px;
  transition: all 0.25s ease-in-out;
}
.element {
  background: green;
  width: 159px;
  transform-origin: 50% 50%;
  height: inherit;
  margin: 0 7px 0 0;
  display: inline-block;
  transition: all 0.25s ease-in-out;
  transform: translate3d(0, 0, 0);
}
.element.active {
  width: 238px;
  transition: all 0.25s ease-in-out;
}
.element.inactive {
  width: 119px;
  transition: all 0.25s ease-in-out;
  opacity: 0.4;
}
.element.franklin {
  background: url('../../assets/erioni.jpg') 45% 0 no-repeat;
  background-size: cover;
}
.element.michael {
  background: url('../../assets/violanti.jpg') 45% 0 no-repeat;
  background-size: cover;
}
.element.trevor {
  background: url('../../assets/orgesi.jpg') 35% 0 no-repeat;
  background-size: cover;
}
.element.new-character {
  background: url('../../assets/olti.jpg') 45% 0 no-repeat;
  background-size: cover;
}
.element:last-of-type {
  margin: 0;
}
@media all and (min-width: 900px) {
  .pen {
    max-width: 1190px;
  }
  .element {
    width: 240px;
    border-radius: 20px;
  }
  .element.inactive {
    width: 200px;
  }
  .element.active {
    width: 321px;
  }
  .stage {
    max-width: 1210px;
    height: 600px;
  }
}
@media all and (max-width: 660px) {
  .pen {
    max-width: 442px;
  }
  .element {
    width: 83px;
  }
  .element.inactive {
    width: 43px;
  }
  .element.active {
    width: 163px;
  }
  .stage {
    max-width: 442px;
  }
}
@keyframes appear {
  15% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


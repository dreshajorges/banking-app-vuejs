<template>
  <div  style="background-color: rgb(1,6,23)">
    <the-navbar/>

    <!-- Image Section with Overlay -->
    <div class="image-container">
      <img src="./../../assets/wallpaperflare.com_wallpaper.jpg" class="background-image">

      <!-- Testimonials Section -->
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


    <div class="card flex-lg-row justify-content-center justify-content-between card-founders  ">
    <div class="card founder" style="width: 25rem;">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div class="card founder" style="width: 25rem;">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    <div class="card founder" style="width: 25rem;">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>


    </div>
    <!-- Footer -->
    <the-footer/>
  </div>





</template>

<script>
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  name: 'BankLandingPage',
  components: {TheFooter, TheNavbar}
};


</script>

<style scoped>

.founder{
  background: linear-gradient(to top, rgba(6, 74, 79, 0.5), rgb(6, 74, 79));
  color: white;
}

.card-founders{
  background-color: rgb(1,6,23);
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

</style>


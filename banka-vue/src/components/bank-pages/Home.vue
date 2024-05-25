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
    <div class="container text-center my-5 services">
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

.footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
}
</style>

<!-- External CSS and JS -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/a076d05399.js"></script>

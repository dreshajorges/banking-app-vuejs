<script setup>

</script>

<template>
  <div class="card text-center" style="background: linear-gradient(to bottom, rgba(6, 74, 79, 0.2), rgb(6, 74, 79));">

    <div class="card-body">
      <h5 class="card-title" style="color:white;">Special title treatment</h5>
      <p class="card-text" style="color:white;">With supporting text below as a natural lead-in to additional content.</p>
    </div>
    <router-link class="nav-link" active-class="active" :to="{ name: 'ContactUs' }">
      <a class="btn" style="background-color: rgb(64, 165, 120); color: white">Contact Us</a>
    </router-link>
    <div class=" text-body-secondary mt-4" >
      <p  style="color:white; ">© All rights reserved</p>
    </div>
  </div>
</template>

<style scoped>

</style>







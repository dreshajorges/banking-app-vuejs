<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg gradient-navbar" style="background: linear-gradient(to top, rgba(6, 74, 79, 0), rgb(6, 74, 79));; position: fixed; z-index: 1; width: 100%;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color:white;">Banka Cacttus</a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{ name: 'Cards' }">
              Cards
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{ name: 'ContactUs' }">
              Contact Us
            </router-link>
          </li>
        </ul>
        <a class="nav-link me-lg-4" href="#" style="color:white;">Profile</a>
        <button class="btn btn-secondary">Dark</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand,
.nav-link {
  color: white;
}


</style>

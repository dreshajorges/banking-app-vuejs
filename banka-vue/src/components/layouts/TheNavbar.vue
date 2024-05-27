<script setup>
import { onMounted } from 'vue';
import { Dropdown, Ripple, initMDB } from 'mdb-ui-kit';

initMDB({ Dropdown, Ripple });

onMounted(() => {
  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl);
  });
});
</script>

<template>
  <nav class="navbar navbar-expand-lg gradient-navbar" style="background: linear-gradient(to top, rgba(6, 74, 79, 0), rgb(6, 74, 79));; position: fixed; z-index: 1; width: 100%;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color:white;">Banka Cacttus</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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
        <div class="dropdown">
          <button
              class="btn btn-wh dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-dropdown-init
              data-mdb-ripple-init
              aria-expanded="false"
          >
Oltion
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" style="color: #dc3545" href="#">Log Out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.navbar-brand,
.nav-link {
  color: white;
}

.btn{
  background-color: rgb(64, 165, 120);
  color: white;
}

</style>

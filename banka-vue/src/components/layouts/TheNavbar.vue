<script setup>
import {onMounted, ref} from 'vue';
import { Dropdown, Ripple, initMDB } from 'mdb-ui-kit';
import {useAuthStore} from "@/stores/auth.js";
import {useRouter} from "vue-router";

const router = useRouter()
const authStore = useAuthStore();

function goLogin(){
  router.push({
    name: 'SignupLogin'
  });
}

initMDB({ Dropdown, Ripple });

onMounted(() => {
  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl);
  });
});


const name = localStorage.getItem('name');

function toggleLightPhoto() {
  emit('toggleLightPhoto')
}


const emit = defineEmits(['toggleLightPhoto']);
</script>




<template>
  <nav class="navbar navbar-expand-lg gradient-navbar" style="background: linear-gradient(to top, rgba(6, 74, 79, 0.09), rgb(6, 74, 79));; position: fixed; z-index: 1; width: 100%;">
    <div class="container-fluid">
      <router-link :to="{name : 'Home'}" class="navbar-brand"  style="color:white;">Banka Cacttus</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active-link" :to="{ name: 'Cards' }">
              Cards
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active-link" :to="{ name: 'ContactUs' }">
              Contact Us
            </router-link>
          </li>
          <li v-if="authStore.isAdmin" class="nav-item">
            <router-link class="nav-link" active-class="active-link" :to="{ name: 'Users' }">
              Users
            </router-link>
          </li>
        </ul>
        <div>
          <div class="dropdown">
            <button
                @click="toggleLightPhoto()"
                class="btn btn-wh"
                type="button"

            >
              🔦
            </button>
          </div>
        </div>


        <div class="dropdown">
          <button @click="goLogin" v-if="!authStore.isLoggedIn" class="btn btn-wh">
            Login / Signup
          </button>
        </div>


        <div class="dropdown" v-if="authStore.isLoggedIn">
          <button
              class="btn btn-wh dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-dropdown-init
              data-mdb-ripple-init
              aria-expanded="false"
            >
               {{name}}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link :to="{name : 'Profile'}"> <li><a class="dropdown-item" href="#">Profile</a></li></router-link>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><router-link :to="{name : 'SignupLogin'}" @click="authStore.logOut()" class="dropdown-item" style="color: #dc3545" href="#">Log Out</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
/* Style for the active link to change text color to grey */
.active-link {
  color: rgba(255, 255, 255, 0.60) !important;
}

/* Other styles */
.navbar-brand,
.nav-link {
  color: white;
}

.btn {
  background-color: rgb(64, 165, 120);
  color: white;
  margin-left: 10px;
}
</style>


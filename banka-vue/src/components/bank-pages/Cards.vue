<script setup>
import {reactive, ref} from "vue";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import {useAuthStore} from "@/stores/auth.js";
import AppButton from "@/components/layouts/AppButton.vue";
import Swal from "sweetalert"
import {useRouter} from "vue-router";

const authStore = useAuthStore();



const lightPhoto = ref(true);

function toggleLightPhoto() {
  lightPhoto.value = !lightPhoto.value;
}


</script>


<template>
  <div style="padding-top: 0.1px;" :class="lightPhoto ? 'bodyDivLight' : 'bodyDivDark'">
    <the-navbar @toggleLightPhoto="toggleLightPhoto"/>



    <the-footer/>
  </div>
</template>


<style scoped>

#birthdateInput {
  padding-right: 30px;
}

.bodyDivLight {
  background-color: #07102b;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.bodyDivDark {
  background-color: rgb(241, 248, 232);
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.formDivDark {
  margin-top: 9%;
  margin-bottom: 8%;
  width: 40%;
  background: rgb(6, 50, 64);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: white;
}

.formDivLight {
  margin-top: 9%;
  margin-bottom: 8%;
  width: 40%;
  background: rgb(135, 170, 163);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: black;
}

.signupDiv h3,
.loginDiv h3 {
  color: #fff;
}

.genderDiv p {
  color: black;
}

.genderDiv .form-check-label {
  margin-left: 0.5rem;
}

.genderDiv .form-check {
  margin-bottom: 0.5rem;
}

.genderDiv {
  padding: 10px;
  background-color: white;
  border-radius: 8px;
}

.genderDiv label {
  color: black;
}

.form-control {
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  color: black;
}

.form-control::placeholder {
  color: black;
}

.form-control:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.btn-success {
  background: rgb(64, 165, 120);
  border: none;
  border-radius: 5px;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.btn-success:hover {
  background: #218838;
}

a {
  color: rgb(22, 121, 171);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: rgb(31, 84, 129);
}
</style>

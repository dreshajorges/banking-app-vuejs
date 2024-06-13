<script setup>
import { useAuthStore } from '@/stores/auth'
import {ref, onMounted, reactive} from 'vue'
import client from "@/helpers/client.js";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import AppButton from "@/components/layouts/AppButton.vue";
import {useRouter} from "vue-router";
import Swal from "sweetalert";

const authStore = useAuthStore()
const user = ref(null)
const router = useRouter()

onMounted(async () => {
  const userId = authStore.loggedInUser.userId
  user.value = await authStore.getUserById(userId);
});

const lightPhoto = ref(JSON.parse(localStorage.getItem('lightPhoto')));

function toggleLightPhoto() {

  lightPhoto.value = !lightPhoto.value;


  localStorage.setItem('lightPhoto', JSON.stringify(lightPhoto.value));
}


const loading = ref(false);

const isUpdate = ref(false);

function changeIsUpdate() {
  isUpdate.value = !isUpdate.value;
}

const updatedUser = reactive({
  email: '',
  password: ''
});


async function handleUpdate() {
  loading.value = true;
  try {
    await authStore.updateUser(authStore.loggedInUser.userId, updatedUser);
    await Swal({
      title: "User Updated Successfully!",
      icon: "success"
    });
    isUpdate.value = false;
    authStore.logOut()
    await router.push({
      name: 'SignupLogin',
    })
  } catch (error) {
    console.error("Update failed", error);
    alert('Failed to update user. Please try again.');
  } finally {
    loading.value = false;
  }
}

</script>


<template>
  <div style="padding-top: 0.1px;" :class="{ 'bodyDivLight': lightPhoto, 'bodyDivDark': !lightPhoto }">
  <the-navbar @toggleLightPhoto="toggleLightPhoto"/>

  <div :class="lightPhoto ? 'profile-containerDark' : 'profile-containerLight'" v-if="!isUpdate">
    <h1 class="profile-heading">Profile</h1>
    <div v-if="user" class="profile-details">
      <div class="detail-item">
        <span class="detail-label">Name:</span>
        <span class="detail-value">{{ user.name }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Surname:</span>
        <span class="detail-value">{{ user.surname }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Gender:</span>
        <span class="detail-value">{{ user.gender }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Birthdate:</span>
        <span class="detail-value">{{ user.birthdate }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Email:</span>
        <span class="detail-value">{{ user.email }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Password:</span>
        <span class="detail-value">*****</span>
      </div>
      <div class="detail-item">
        <span class="detail-label"><button class="btn btn-warning" @click="changeIsUpdate">Update</button></span>
      </div>
    </div>
    <div v-else class="loading-message">
      <p>Loading...</p>
    </div>
  </div>





    <div v-if="isUpdate" class="signupDiv container">
      <h3 :class="lightPhoto ? 'h3Light' : 'h3Dark' " class="mb-5 text-center">Sign Up</h3>
      <form @submit.prevent="handleUpdate">
        <div class="mb-3">
          <input type="text" class="form-control" :placeholder='user.name' disabled/>
        </div>


        <div class="mb-3">
          <input type="text" class="form-control" :placeholder="user.surname" disabled/>
        </div>


        <div class="mb-3">
          <input id="birthdateInput" type="text" class="form-control" :placeholder="user.birthdate" disabled>
        </div>


        <div class="mb-3">
          <input id="genderInput" type="text" class="form-control" :placeholder="user.gender" disabled>
        </div>


        <div class="mb-3">
          <input type="email" class="form-control" :placeholder="user.email" v-model="updatedUser.email"/>
        </div>


        <div class="mb-3">
          <input type="password" class="form-control" placeholder="New Password" v-model="updatedUser.password"/>
        </div>

        <div class="text-center mt-5">
          <app-button :loading="loading" class="btn btn-warning">
            Update
          </app-button>
        </div>
      </form>
    </div>





  <the-footer/>
  </div>
</template>



<style scoped>

.h3Light{
  color: white;
}

.h3Dark{
  color: black;
}

.signupDiv{
  margin-top: 7%;
  margin-bottom: 7%;
  padding-left: 10%;
  padding-right: 10%;
}


.profile-containerLight button{
  margin-top: 4%;
}

.profile-containerDark button{
  margin-top: 4%;
}

.bodyDivLight {
  background-color: #07102b;
}

.bodyDivDark {
  background-color: rgb(241, 248, 232);
}

.profile-containerLight {
  margin-left: 34%;
  margin-top: 7%;
  margin-bottom: 7%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease; /* Add transition for smooth color change */
}

.profile-containerDark {
  margin-left: 34%;
  margin-top: 7%;
  margin-bottom: 7%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  color: white;
  transition: background-color 0.3s ease; /* Add transition for smooth color change */
}

.profile-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.profile-details {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}

.detail-item {
  margin-bottom: 10px;
}

.detail-label {
  font-weight: bold;
  margin-right: 10px;
}

.loading-message {
  text-align: center;
  margin-top: 50px;
}
</style>

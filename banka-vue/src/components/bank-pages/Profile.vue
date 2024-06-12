<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref, onMounted } from 'vue'
import client from "@/helpers/client.js";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import AppButton from "@/components/layouts/AppButton.vue";

const authStore = useAuthStore()
const user = ref(null)

onMounted(async () => {
  const userId = authStore.loggedInUser.userId
  user.value = await authStore.getUserById(userId);
});

const lightPhoto = ref(JSON.parse(localStorage.getItem('lightPhoto')));

function toggleLightPhoto() {

  lightPhoto.value = !lightPhoto.value;


  localStorage.setItem('lightPhoto', JSON.stringify(lightPhoto.value));
}
</script>


<template>
  <div style="padding-top: 0.1px;" :class="{ 'bodyDivLight': lightPhoto, 'bodyDivDark': !lightPhoto }">
  <the-navbar @toggleLightPhoto="toggleLightPhoto"/>

  <div :class="lightPhoto ? 'profile-containerDark' : 'profile-containerLight'">
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
        <span class="detail-label"><button class="btn btn-warning">Update</button></span>
      </div>
    </div>
    <div v-else class="loading-message">
      <p>Loading...</p>
    </div>
  </div>











  <the-footer/>
  </div>
</template>



<style scoped>
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

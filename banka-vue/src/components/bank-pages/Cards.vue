<script setup>
import {onMounted, ref} from "vue";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import {useAuthStore} from "@/stores/auth.js";
import Swal from "sweetalert";
import {useRouter} from "vue-router";

const authStore = useAuthStore();
const cards = ref([]);
const lightPhoto = ref(true);

function toggleLightPhoto() {
  lightPhoto.value = !lightPhoto.value;
}

const fetchCards = async () => {
  try {
    cards.value = await authStore.getCards();
    console.log(cards.value);
  } catch (error) {
    console.error("Failed to fetch cards", error);
  }
};

onMounted(() => {
  fetchCards();
});

function getCardImage(cardType) {
  let imagePath;
  switch (cardType) {
    case 'TRAVEL':
      imagePath = new URL('@/assets/TravelCard.png', import.meta.url).href;
      break;
    case 'BUSINESS':
      imagePath = new URL('@/assets/BusinessCard.png', import.meta.url).href;
      break;
    case 'STUDENT':
      imagePath = new URL('@/assets/StudentCard.png', import.meta.url).href;
      break;
    default:
      imagePath = new URL('@/assets/SavingsCard.png', import.meta.url).href;
      break;
  }
  return imagePath;
}

</script>

<template>
  <div style="padding-top: 0.1px;" :class="{ 'bodyDivLight': lightPhoto, 'bodyDivDark': !lightPhoto }">
    <TheNavbar @toggleLightPhoto="toggleLightPhoto"/>

    <div class="main-container">
      <div class="creditcard-container">
        <h3 class="mini-title">Credit Cards</h3>
        <div v-for="card in cards" :key="card.id" id="creditCards" style="margin-top: 20px;">
          <img :src="getCardImage(card.cardType)" alt="Card Type Image" class="card-image"/>
        </div>
      </div>

      <section class="creditcard-section">

       <img src="">

        <h3>Balance: </h3>

        <h3>Card Number: </h3>

        <h3>Expiration Date: </h3>


      </section>

      <div class="button-container">
        <button class="btn btn-warning float-lg-end creditButton">Add a Credit Card</button>
      </div>
    </div>

    <TheFooter/>
  </div>
</template>


<style scoped>
/* Main container to use Flexbox */
.main-container {
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the start of the cross axis */
  padding: 10px;
  gap: 10px; /* Optional: space between items */
}

/* Credit card container */
.creditcard-container {
  margin-left: 0.5%;
  flex: 0 0 30%;
  background-color: rgb(135, 170, 163); /* Background color */
  padding: 10px;
  border-radius: 10px; /* Rounded corners */
  border: 3px solid rgb(6, 50, 64); /* Border */

  display: flex; /* Use Flexbox */
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
}

.creditcard-container img{
 border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.creditcard-container img:hover{
  cursor: pointer;
  transform: scale(1.05); /* Increase size by 5% on hover */
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); /* Change box-shadow on hover */
}

/* Credit card section */
.creditcard-section {
  flex: 0 0 50%;
  background-color: rgb(135, 170, 163); /* Optional: background color */
  padding: 10px;
  border: 3px solid rgb(6, 50, 64);
  border-radius: 10px; /* Optional: rounded corners */
}

/* Button container */
.button-container {
  flex: 0 0 18%;
  display: flex;
  justify-content: center; /* Center button horizontally */
  align-items: center; /* Center button vertically */
  padding: 10px;
}

/* Button styling */
.creditButton {
  width: 100%; /* Ensure the button takes up the full width of its container */
  height: 50px; /* Adjust height as needed */
}

/* Media query for responsiveness */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    align-items: stretch;
  }

  .creditcard-container, .creditcard-section, .button-container {
    flex: 1 1 auto;
    width: 100%; /* Ensure full width on smaller screens */
    margin-bottom: 10px; /* Optional: spacing between stacked items */
  }
}




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

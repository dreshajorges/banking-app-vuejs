<script setup>
import {onMounted, reactive, ref} from 'vue';
import TheNavbar from '@/components/layouts/TheNavbar.vue';
import TheFooter from '@/components/layouts/TheFooter.vue';
import { useAuthStore } from '@/stores/auth.js';
import Swal from 'sweetalert';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const cards = ref([]);
const card = ref(null);
const isAddCard = ref(false);

// New reactive properties for form inputs
const newCardBalance = ref('');
const newCardType = ref('TRAVEL'); // Default value

const lightPhoto = ref(JSON.parse(localStorage.getItem('lightPhoto')));

function toggleLightPhoto() {

  lightPhoto.value = !lightPhoto.value;


  localStorage.setItem('lightPhoto', JSON.stringify(lightPhoto.value));
}

const fetchCards = async () => {
  try {
    const allCards = await authStore.getCards();

    cards.value = allCards.filter(card => card.user && card.user.id === authStore.loggedInUser.userId);

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

async function getCardById(cardId) {
  try {
    card.value = await authStore.getCardById(cardId);
    console.log(card.value); // Debugging
  } catch (error) {
    console.error("Failed to fetch card by ID", error);
  }
}

function changeisAddCard() {
  isAddCard.value = !isAddCard.value;
}



const newCard = reactive({

  balance: null,
  cardType: null,
  userId: authStore.loggedInUser.userId,
})


async function addCard() {
  try {

    const payload = {
      cardType: newCard.cardType, // Ensure this is properly bound to the form
      balance: newCard.balance,   // Ensure this is properly bound to the form
      user: {
        id: newCard.userId // Replace this with the actual user ID
      }
    }

    await authStore.addCard(payload)
    isAddCard.value = !isAddCard.value;

    Swal("Success", "New card added successfully!", "success");

    await fetchCards()

  } catch (error) {
    console.error("Failed to add new card", error);
    Swal("Error", "Failed to add new card", "error");
  }
}


async function getUserAndFetchCards(userId) {
  try {
    await authStore.getUserById(userId);
    await fetchCards(userId);
  } catch (error) {
    console.error("Failed to fetch user and cards", error);
  }
}
</script>


<template>
  <div :class="{ 'bodyDivLight': lightPhoto, 'bodyDivDark': !lightPhoto }" style="padding-top: 0.1px;">
    <TheNavbar @toggleLightPhoto="toggleLightPhoto" />

    <div class="main-container">
      <div class="creditcard-container">
        <h3 class="mini-title">Credit Cards</h3>
        <div v-for="card in cards" :key="card.id" id="creditCards" style="margin-top: 20px;" @click="getCardById(card.id)">
          <img :src="getCardImage(card.cardType)" alt="Card Type Image" class="card-image" />
        </div>
      </div>

      <section class="creditcard-section" v-if="card">
        <img :src="getCardImage(card.cardType)" alt="Card Image" />
        <h3>Balance: {{ card.balance }}</h3>
        <h3>Card Number: {{ card.cardNumber }}</h3>
        <h3>Expiration Date: {{ card.expirationDate }}</h3>
      </section>

      <div class="button-container" v-if="!isAddCard">
        <button @click="changeisAddCard" class="btn btn-warning float-lg-end creditButton">Add a Credit Card</button>
      </div>

      <div class="button-container" v-else>
        <form @submit.prevent="addCard" class="formDivLight">
          <div class="mb-3">
            <label for="balance" class="form-label">Balance</label>
            <input type="number" id="balance" v-model="newCard.balance" class="form-control" placeholder="Enter balance" required />
          </div>

          <div class="mb-3">
            <label for="cardType" class="form-label">Card Type</label>
            <select id="cardType" v-model="newCard.cardType" class="form-control" required>
              <option value="TRAVEL">Travel</option>
              <option value="SAVINGS">Savings</option>
              <option value="BUSINESS">Business</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>

          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>


    </div>

    <TheFooter />
  </div>
</template>



<style scoped>


.bodyDivLight .creditcard-container,
.bodyDivLight .creditcard-section,
.bodyDivLight .button-container
{
  background-color: rgb(6, 50, 64);
  border: 3px solid rgb(135, 170, 163);
  color: rgb(135, 170, 163);
}



.bodyDivLight form
{
  background-color: rgb(6, 50, 64);
  color: rgb(135, 170, 163);
}




.bodyDivLight .creditcard-container h3,
.bodyDivLight .creditcard-section h3,
.bodyDivLight .button-container {
  background-color: rgb(6, 50, 64);
}


/* Styles for credit card images */
.creditcard-section img {
  border-radius: 15px;
  margin-top: 2%;
  margin-bottom: 3%;
  width: 70%;
}

.creditcard-section h3 {
  margin-bottom: 3%;
}

/* Main container to use Flexbox */
.main-container {
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
}

/* Credit card container */
.creditcard-container {
  margin-left: 0.5%;
  flex: 0 0 30%;
  background-color: rgb(135, 170, 163);
  padding: 10px;
  border-radius: 10px;
  border: 3px solid rgb(6, 50, 64);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.creditcard-container img {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.creditcard-container img:hover {
  cursor: pointer;
  transform: scale(1.05);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Credit card section */
.creditcard-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 0 45%;
  background-color: rgb(135, 170, 163);
  padding: 10px;
  border: 3px solid rgb(6, 50, 64);
  border-radius: 10px;
}

/* Button container */
.button-container {
  flex: 0 0 23%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid rgb(6, 50, 64);
  border-radius: 10px;
}

/* Button styling */
.creditButton {
  width: 100%;
  height: 50px;
}

/* Form styling */
.formDivLight {
  width: 100%;
  background: rgb(135, 170, 163);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: black;
}

.form-control {
  width: 100%; /* Full width */
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  color: black;
  margin-bottom: 1rem;
}

.form-control::placeholder {
  color: black;
}

.form-control:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.btn-success {
  width: 100%; /* Full width */
  background: rgb(64, 165, 120);
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-success:hover {
  background: #218838;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    align-items: stretch;
  }

  .creditcard-container,
  .creditcard-section,
  .button-container {
    flex: 1 1 auto;
    width: 100%;
    margin-bottom: 10px;
  }
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
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

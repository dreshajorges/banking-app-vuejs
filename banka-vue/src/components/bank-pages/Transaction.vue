<script setup>

import TheFooter from "@/components/layouts/TheFooter.vue";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import {reactive, ref} from "vue";
import Swal from "sweetalert";
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore()

const lightPhoto = ref(JSON.parse(localStorage.getItem('lightPhoto')));

function toggleLightPhoto() {

  lightPhoto.value = !lightPhoto.value;


  localStorage.setItem('lightPhoto', JSON.stringify(lightPhoto.value));
}


const sendMoneyRequest = reactive({

  sendersNumber: '',
  recieversNumber: '',
  amount: null
})


async function sendMoney() {
  try {
    const payload = {
      senderCardNumber: sendMoneyRequest.sendersNumber,
      recipientCardNumber: sendMoneyRequest.recieversNumber,
      amount: sendMoneyRequest.amount
    };

    // Log payload to verify data
    console.log("Payload:", payload);

    // Send money using authStore
    const response = await authStore.sendMoney(payload);
    console.log(response)

    Swal("Success", "The Money Was Sent", "success");
  } catch (error) {
    console.error("Failed to send money", error);
    Swal("Error", "Failed to Send the Money", "error");
  }
}

</script>

<template>
  <div :class="{ 'bodyDivLight': lightPhoto, 'bodyDivDark': !lightPhoto }" style="padding-top: 0.1px;">
    <TheNavbar @toggleLightPhoto="toggleLightPhoto" />
  <div class="form-container">
    <h2>Transaction Form</h2>
    <form @submit.prevent="sendMoney">
      <div class="form-group">
        <label for="senderCard">Sender's Card Number</label>
        <input
            type="text"
            id="senderCard"
            v-model.trim="sendMoneyRequest.sendersNumber"
            placeholder="Enter sender's card number"
            required
        />
      </div>
      <div class="form-group">
        <label for="receiverCard">Receiver's Card Number</label>
        <input
            type="text"
            id="receiverCard"
            v-model.trim="sendMoneyRequest.recieversNumber"
            placeholder="Enter receiver's card number"
            required
        />
      </div>
      <div class="form-group">
        <label for="balance">Balance</label>
        <input
            type="number"
            id="balance"
            v-model.number="sendMoneyRequest.amount"
            placeholder="Enter balance"
            required
            min="1"
        />
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>

  </div>
    <the-footer/>
  </div>
</template>



<style scoped>

.bodyDivLight .form-container
{
  background-color: rgb(6, 50, 64);
  border: 2px solid rgb(135, 170, 163);
  color: rgb(135, 170, 163);
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


.form-container {
  background-color: rgb(135, 170, 163);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 50%;
  margin: auto;
  text-align: center;
  margin-top: 7%;
  margin-bottom: 4.7%;
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 5%;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.submit-button {
  background-color: rgb(64, 165, 120);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>

import {defineStore} from "pinia";
import {computed, ref} from "vue";
import client from "../helpers/client.js"
import {jwtDecode} from "jwt-decode"

export const useAuthStore =defineStore('auth', ()=>{


    const url = "http://localhost:8080/api/banka"
    const token = ref(localStorage.getItem('token') || null)
    const creditUrl = "http://localhost:8080/api/banka/cards"



    async function signup(user){

        const response = await client.post(`${url}/auth/register`, user);

        console.log(response);

    }


    async function logIn(user) {
        const response = await client.post(`${url}/auth/login`, user)



        if (response.data) {
            localStorage.setItem('token', response.data.token)
            token.value = response.data.token;

            const decodedToken = jwtDecode(token.value);
            const name = decodedToken.sub;


            localStorage.setItem('name', name);

        }

        console.log(response)
    }


    async function getUsers() {
        try {
            const response = await client.get(`${url}/users`);
            return response.data; // Return the data
        } catch (error) {
            console.error('Failed to fetch users:', error);
            return [];
        }
    }


    async function getUserById(userId) {
        try {
            const response = await client.get(`${url}/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch user with ID ${userId}:`, error);
            return null;
        }
    }


    async function updateUser(userId,user){


    try {
        const response = await client.put(`${url}/users/${userId}`, user);
        console.log(response);
    }catch (e) {
        console.log("Failed to update user with ID", userId);
    }


    }



    async function deleteUser(userId) {

        try {
            const response = await client.delete(`${url}/users/delete/${userId}`);
            console.log(response);
        }catch (e) {
            console.log("Failed to delete user with ID", userId);
        }

    }


    async function getCards() {

        try {
            const response = await client.get(`${creditUrl}`);
            return response.data

        }catch (e) {
            console.log("Failed to fetch Cards");
        }

    }


    async function getCardById(creditId) {

        try {
            const response = await client.get(`${creditUrl}/${creditId}`);
            return response.data
        }catch (e) {
            console.log("Failed to fetch Card");
            return null;
        }

    }




    async function addCard(card) {

        try {
            const response = await client.post(`${creditUrl}`, card);

            console.log(response)
        }catch (e) {
            console.log("Failed to add Card");
            return null;
        }

    }



    async function sendMoney(sendMoneyRequest) {
        try {
            const response = await client.post(`${creditUrl}/send-money`, sendMoneyRequest);

            // Check if the request was successful based on HTTP status code
            if (response.status === 200) {
                console.log("Money sent successfully:", response.data);
                return response.data; // Return the response data on success
            } else {
                // Log and throw an error if the request was not successful
                console.error("Failed to send money. Status:", response.status);
                throw new Error("Failed to send money");
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error sending money:", error.message);
            throw error; // Rethrow the error to be caught by the calling function
        }
    }






    function logOut() {
        if (isLoggedIn.value) {
            localStorage.removeItem('token');
            token.value = null;

            localStorage.removeItem('name');

        }
    }

    const loggedInUser = computed(() => {
        return token.value ? jwtDecode(token.value) : null;

    })


    const isLoggedIn = computed(() => {
        return !!token.value;
    })


    const isAdmin = computed(() => {
        if (token.value) {
            try {
                const decodedToken = jwtDecode(token.value);
                return decodedToken.role === 'ADMIN';
            } catch (error) {
                console.error("Failed to decode token:", error);
                return false;
            }
        }
        return false;
    });



return{signup, token, isAdmin, loggedInUser, isLoggedIn, logIn, logOut, getUsers, getUserById, updateUser, deleteUser, getCards, getCardById,  sendMoney}


})
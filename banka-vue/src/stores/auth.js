import {defineStore} from "pinia";
import {computed, ref} from "vue";
import client from "../helpers/client.js"
import {jwtDecode} from "jwt-decode"

export const useAuthStore =defineStore('auth', ()=>{


    const url = "http://localhost:8080/api/banka"
    const token = ref(localStorage.getItem('token') || null)



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



return{signup, token, isAdmin, loggedInUser, isLoggedIn, logIn, logOut, getUsers, getUserById}


})
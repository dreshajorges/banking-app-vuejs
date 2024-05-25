import SingupLogin from "@/components/bank-pages/SingupLogin.vue";
import { createRouter, createWebHistory } from 'vue-router'
import Cards from "@/components/bank-pages/Cards.vue";
import Home from "@/components/bank-pages/Home.vue";
import ContactUs from "@/components/bank-pages/ContactUs.vue";


const routes = [
    {   path: '/',
        name: 'SignupLogin',
    component: SingupLogin},

    {
        path: '/cards',
        name: 'Cards',
        component: Cards
    },

    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/Contact',
        name: 'ContactUs',
        component: ContactUs
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from "@/stores/auth";
import SingupLogin from "@/components/bank-pages/SingupLogin.vue";
import Cards from "@/components/bank-pages/Cards.vue";
import Home from "@/components/bank-pages/Home.vue";
import ContactUs from "@/components/bank-pages/ContactUs.vue";
import Swal from "sweetalert";
import Users from "@/components/bank-pages/Users.vue";
import Profile from "@/components/bank-pages/Profile.vue";
import Transaction from "@/components/bank-pages/Transaction.vue";




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '', name: 'SignupLogin', component: SingupLogin, meta: { requiresAuth: false } },
        { path: '/cards', name: 'Cards', component: Cards , meta: { requiresAuth: true }},
        { path: '/home', name: 'Home', component: Home , meta: { requiresAuth: false }},
        { path: '/Contact', name: 'ContactUs', component: ContactUs , meta: { requiresAuth: false }},
        { path: '/users', name: 'Users', component: Users , meta: { requiresAuth: true }},
        { path: '/profile', name: 'Profile', component: Profile , meta: { requiresAuth: true }},
        { path: '/transaction', name: 'Transaction', component: Transaction , meta: { requiresAuth: true }}



    ]
})


router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isLoggedIn) {

        Swal({
            title: "Error 403, Unauthorized",
            text: "You must be logged in to access this page.",
            icon: "error"
        });

        next({
            name: 'SignupLogin',
            query: { redirect: to.fullPath }
        });
    } else {
        next();
    }
});

export default router











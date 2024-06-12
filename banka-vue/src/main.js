
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "@/routers/router.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

<script setup>

import TheMainLayout from "@/components/layouts/TheMainLayout.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";


  const signUp = ref(true)

  function changeSignUp(){
    signUp.value = !signUp.value
  }



  const {push} = useRouter()
</script>

<template>



<the-main-layout v-if="signUp">
<template #header>
  <h3 class="mb-5 text-center">Sign Up</h3>
</template>

  <template v-slot:default>
    <form>

      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Username">
      </div>

      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Email">
      </div>

      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Password">
      </div>

      <div class="mt-4  text-center">
       <router-link to="Home">  <button class="btn btn-success">Sign Up</button></router-link>
      </div>

      <div class="mt-4  text-center">
        <a href="#" @click="changeSignUp()">Are you already registered. <strong>Log In</strong></a>
      </div>
    </form>
  </template>

</the-main-layout>


  <the-main-layout v-else>
    <template #header>
      <h3 class="mb-5 text-center">Login</h3>
    </template>

    <template v-slot:default>
      <form>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Email">
        </div>

        <div class="mt-4">
          <input type="password" class="form-control" placeholder="Password">
        </div>

        <div class="mt-4  text-center">
          <router-link to="Home">  <button class="btn btn-success">Login</button></router-link>
        </div>

        <div class="mt-4  text-center">
          <a href="#" @click="changeSignUp()">Don't have an account. <strong>Sign Up</strong></a>
        </div>
      </form>
    </template>

  </the-main-layout>


</template>

<style scoped>

</style>
<script setup>
import {reactive, ref} from "vue";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import {useAuthStore} from "@/stores/auth.js";
import AppButton from "@/components/layouts/AppButton.vue";
import Swal from "sweetalert"
import {useRouter} from "vue-router";

const authStore = useAuthStore();

const signUp = ref(true);

const formData = reactive({
  name: {val: '', isValid: true},
  surname: {val: '', isValid: true},
  birthdate: {val: null, isValid: true},
  gender: {val: null, isValid: true},
  email: {val: '', isValid: true},
  password: {val: '', isValid: true},
  formIsValid: true
});

function validateForm() {
  formData.formIsValid = true;


  formData.name.isValid = !!formData.name.val;
  formData.surname.isValid = !!formData.surname.val;
  formData.birthdate.isValid = !!formData.birthdate.val;
  formData.gender.isValid = !!formData.gender.val;
  formData.email.isValid = !!formData.email.val;
  formData.password.isValid = !!formData.password.val;


  formData.formIsValid = formData.name.isValid &&
      formData.surname.isValid &&
      formData.birthdate.isValid &&
      formData.gender.isValid &&
      formData.email.isValid &&
      formData.password.isValid;
}

const clearValidity = (key) => {
  formData[key].isValid = true;
};

function changeSignUp() {
  signUp.value = !signUp.value;
}

const lightPhoto = ref(JSON.parse(localStorage.getItem('lightPhoto')));

function toggleLightPhoto() {

  lightPhoto.value = !lightPhoto.value;


  localStorage.setItem('lightPhoto', JSON.stringify(lightPhoto.value));
}

async function signupButton() {
  validateForm();
  if (formData.formIsValid) {
    try {

      loading.value = true;

      setTimeout(async () => {

        const payload = {
          name: formData.name.val,
          surname: formData.surname.val,
          birthdate: formData.birthdate.val,
          gender: formData.gender.val.toUpperCase(),
          email: formData.email.val,
          password: formData.password.val
        };


        await authStore.signup(payload);
        loading.value = false;

        await Swal({
          title: "Signed up successfully!",
          icon: "success"
        });

        signUp.value = false;

      })

    } catch (e) {
      console.log(e);
    }
  }
}

const loginFormData = reactive({

  email: {val: ''},
  password: {val: ''},

});


const router = useRouter()

 async function loginButton(){
  try {

    const payload = {

      email: loginFormData.email.val,
      password: loginFormData.password.val

    };

    await authStore.logIn(payload);

    await Swal({
      title: "Logged in successfully!",
      icon: "success"
    });

    await router.push("Home");

  }catch (e){
    await Swal({
      title: "Incorrect email or password",
      icon: "error"
    });
    console.log(e);
  }
}

const loading = ref(false);
</script>


<template>
  <div style="padding-top: 0.1px;" :class="lightPhoto ? 'bodyDivLight' : 'bodyDivDark'">
    <the-navbar @toggleLightPhoto="toggleLightPhoto"/>

    <div class="container" :class="lightPhoto ? 'formDivDark' : 'formDivLight'">
      <div v-if="signUp" class="signupDiv">
        <h3 class="mb-5 text-center">Sign Up</h3>
        <form @submit.prevent="signupButton">
          <!-- Name Input -->
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Name"
                   :class="{'is-invalid': !formData.name.isValid}"
                   v-model.trim="formData.name.val"
                   @blur="clearValidity('name')"/>
            <div class="invalid-feedback" v-if="!formData.name.isValid">
              First name is required.
            </div>
          </div>

          <!-- Surname Input -->
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Surname"
                   :class="{'is-invalid': !formData.surname.isValid}"
                   v-model.trim="formData.surname.val"
                   @blur="clearValidity('surname')"/>
            <div class="invalid-feedback" v-if="!formData.surname.isValid">
              Surname is required.
            </div>
          </div>

          <!-- Birthdate Input -->
          <div class="mb-3">
            <input id="birthdateInput" type="date" class="form-control" placeholder="Birthdate"
                   :class="{'is-invalid': !formData.birthdate.isValid}"
                   v-model.trim="formData.birthdate.val"
                   @blur="clearValidity('birthdate')"/>
            <div class="invalid-feedback" v-if="!formData.birthdate.isValid">
              Birthdate is required.
            </div>
          </div>

          <!-- Gender Input -->
          <!-- Gender Input -->
          <div class="mb-4 genderDiv">
            <p>Gender</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="male"
                     v-model="formData.gender.val" value="MALE"
                     :class="{'is-invalid': !formData.gender.isValid}"
                     @blur="clearValidity('gender')"/>
              <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="female"
                     v-model="formData.gender.val" value="FEMALE"
                     :class="{'is-invalid': !formData.gender.isValid}"
                     @blur="clearValidity('gender')"/>
              <label class="form-check-label" for="female">Female</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="other"
                     v-model="formData.gender.val" value="OTHER"
                     :class="{'is-invalid': !formData.gender.isValid}"
                     @blur="clearValidity('gender')"/>
              <label class="form-check-label" for="other">Other</label>
            </div>
            <div class="invalid-feedback" v-if="!formData.gender.isValid">
              Gender is required.
            </div>
          </div>


          <!-- Email Input -->
          <div class="mb-3">
            <input type="email" class="form-control" placeholder="Email"
                   :class="{'is-invalid': !formData.email.isValid}"
                   v-model.trim="formData.email.val"
                   @blur="clearValidity('email')"/>
            <div class="invalid-feedback" v-if="!formData.email.isValid">
              Email is required.
            </div>
          </div>

          <!-- Password Input -->
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Password"
                   :class="{'is-invalid': !formData.password.isValid}"
                   v-model.trim="formData.password.val"
                   @blur="clearValidity('password')"/>
            <div class="invalid-feedback" v-if="!formData.password.isValid">
              Password is required.
            </div>
          </div>

          <div class="text-center mt-5">
            <app-button :loading="loading" class="btn-primary ms-2">
              Save
            </app-button>
          </div>

          <div class="text-center mt-4">
            <a href="#" @click.prevent="changeSignUp()">Already registered? <strong>Log In</strong></a>
          </div>
        </form>
      </div>

      <div v-else class="loginDiv">
        <h3 class="mb-5 text-center">Login</h3>
        <form @submit.prevent="loginButton">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Email" v-model="loginFormData.email.val"/>
          </div>

          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Password" v-model="loginFormData.password.val"/>
          </div>

          <div class="text-center mt-5">

              <button type="submit" class="btn btn-success btn-lg">Login</button>

          </div>

          <div class="text-center mt-4">
            <a href="#" @click.prevent="changeSignUp()">Don't have an account? <strong>Sign Up</strong></a>
          </div>
        </form>
      </div>
    </div>

    <the-footer/>
  </div>
</template>


<style scoped>



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

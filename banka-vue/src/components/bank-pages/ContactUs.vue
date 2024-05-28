<script setup>

</script>


<template>
  <img src="./../../assets/SkyscrapersEdited.png" class="background-image">

  <h1 class="h11">Contact Us</h1>

  <form class="row g-3 needs-validation formContact" novalidate>
    <div class="col-md-4">
      <div class="form-outline">
        <input type="text" class="form-control" id="validationCustom01" required placeholder="Name" />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">Please provide your name.</div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-outline">
        <input type="text" class="form-control" id="validationCustom02" required placeholder="Surname" />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">Please provide your surname.</div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-group form-outline">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Email" required />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">Please provide a valid email.</div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-outline">
        <input type="text" class="form-control" id="validationCustom03" required placeholder="City" />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">Please provide a valid city.</div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-outline">
        <input type="number" class="form-control" id="validationCustom05" required placeholder="Zip Code" pattern="\\d{5}" title="Please enter a valid zip code (5 digits)." />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">Please provide a valid zip code.</div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
        <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
        <div class="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>
    <div class="col-12">
      <router-link class="nav-link" :to="{ name: 'Home' }"><button class="btn" >Submit form</button></router-link>
    </div>
  </form>
</template>

<style scoped>
.background-image {
  width: 100%;
  height: 915px;
  filter: blur(3px);
}

.formContact {
  position: absolute;
  top: 35%;
  width: 80%;
  left: 10%;
  color: white;
}

input:valid {
  border-color: #28a745;
}

input:invalid {
  border-color: #dc3545;
}

.valid-feedback {
  display: none;
}

.invalid-feedback {
  display: none;
}

input:valid ~ .valid-feedback {
  display: block;
}

input:invalid ~ .invalid-feedback {
  display: block;
}

.h11{
  position: absolute;
  top: 10%;
  left: 45%;
  color: white;
  font-family: "Dosis", sans-serif;
}

.btn{
  background-color: rgb(64, 165, 120);
  color: white;
}
</style>

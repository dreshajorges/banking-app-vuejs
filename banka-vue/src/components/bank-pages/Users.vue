<script setup>
import {ref, onMounted} from 'vue';
import {useAuthStore} from "@/stores/auth.js";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import Swal from "sweetalert";

// Create a store instance
const authStore = useAuthStore();

// Reactive reference to store user data
const users = ref([]);

// Fetch users when the component is mounted
const fetchUsers = async () => {
  users.value = await authStore.getUsers();
};

const lightPhoto = ref(JSON.parse(localStorage.getItem('lightPhoto')));

function toggleLightPhoto() {
  lightPhoto.value = !lightPhoto.value;
  localStorage.setItem('lightPhoto', JSON.stringify(lightPhoto.value));
}

onMounted(() => {
  fetchUsers();
});

async function deleteUser(userId, email) {
  try {
    await authStore.deleteUser(userId);
    await Swal({
      title: `You have successfully deleted the user ${email}`,
      icon: "success"
    });
    // Fetch users again after deletion
    await fetchUsers();
  } catch(e) {
    console.log(e);
  }
}
</script>

<template>
  <div style="padding-top: 0.1px;" :class="lightPhoto ? 'bodyDivDark' : 'bodyDivLight'">
    <the-navbar @toggleLightPhoto="toggleLightPhoto"/>
    <div class="container usersDiv">
      <h1 :class="lightPhoto ? 'h1Dark' : 'h1Light' ">User List</h1>
      <table :class="lightPhoto ? 'tableDark' : 'tableLight'">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Birthdate</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Role</th>
          <th class="text-center">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id" :class="lightPhoto ? 'rowDark' : 'rowLight'">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.birthdate }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="() => deleteUser(user.id, user.email)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <the-footer/>
  </div>
</template>

<style scoped>
button{
  margin-left: 21%;
}

.h1Light {
  color: black;
}

.h1Dark {
  color: white;
}

.bodyDivLight {
  background-color: rgb(241, 248, 232);
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.bodyDivDark {
  background-color: #07102b;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

/* Container Style */
.usersDiv {
  margin-top: 7%;
  margin-bottom: 7%;
}

/* Table Styles for Light Mode */
.tableLight {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff;
  color: #000000;
}

.tableLight th {
  background-color: #f2f2f2;
  text-align: left;
}

.tableLight td, .tableLight th {
  border: 1px solid #ddd;
  padding: 8px;
}

.tableLight tr:nth-child(even) {
  background-color: #f9f9f9;
}

.tableLight tr:hover {
  background-color: #e0e0e0;
}

/* Table Styles for Dark Mode */
.tableDark {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #333333;
  color: #ffffff;
}

.tableDark th {
  background-color: #444444;
  text-align: left;
}

.tableDark td, .tableDark th {
  border: 1px solid #555555;
  padding: 8px;
}

.tableDark tr:nth-child(even) {
  background-color: #555555;
}

.tableDark tr:hover {
  background-color: #666666;
}

/* Row Styles */
.rowLight {
  background-color: #ffffff;
}

.rowDark {
  background-color: #333333;
}
</style>

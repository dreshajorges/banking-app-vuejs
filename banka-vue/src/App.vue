<script setup>

import {onMounted} from "vue";

onMounted(() => {
  localStorage.setItem('lightPhoto', JSON.stringify(false));

})



</script>

<template>
<router-view/>
</template>

<style scoped>


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>



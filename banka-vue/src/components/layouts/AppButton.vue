<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="btn btn-success" v-bind="$attrs" type="button" disabled v-if="loading">
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">
      <slot/>
    </span>
  </button>
  <button class="btn btn-success" v-bind="$attrs" v-else>
    <slot/>
  </button>
</template>

<style scoped>

</style>
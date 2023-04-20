<template>
  <div>
      <p class="is-error">{{ greetings }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const greetings = ref('Hello!');
</script>


<style lang="scss" scoped>
</style>

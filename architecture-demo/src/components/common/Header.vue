<template>
  <header class="header">
    <nav class="header__nav"></nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/styles/settings/variables';

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: variables.$z-header;
}
</style>

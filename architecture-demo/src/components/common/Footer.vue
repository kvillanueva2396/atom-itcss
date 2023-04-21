<template>
  <footer class="footer">
    <div class="footer__contain container">
      <p class="footer__text">© All rights reserved</p>
      <p class="footer__text">
        "Si lo puedes imaginar, lo puedes programar". Alejandro Taboada (1997 -
        2019)
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/styles/settings/variables';
@use '@/styles/tools/mixins';

.footer {
  background: variables.$blue-button;
  color: variables.$white;

  &__contain {
    @include mixins.justify();
  }

  &__text {
    font-size: variables.$fs-footer;
  }
}
</style>

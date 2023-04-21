<template>
  <header class="header">
    <nav class="header__nav container">
      <img
        alt="logo-demo"
        src="@/assets/images/logo-app.png"
        class="header__logo"
      />
      <ul class="ui-list ui-list--horizontal">
        <li><a href="#" class="header__link">Home</a></li>
        <li><a href="#" class="header__link">Service</a></li>
        <li>
          <a href="#" class="header__link header__link--separator">About Us</a>
        </li>
        <li>
          <Button tag="a" theme="primary">Sign In</Button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { Button } from '@/components';
</script>

<style lang="scss" scoped>
@use '@/styles/settings/variables';
@use '@/styles/tools/mixins';

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: variables.$z-header;
  width: 100%;
  background: variables.$white;
  box-shadow: 0 6px 24px -12px variables.$shadow;

  &__brand {
    display: block;
    max-height: 2.3rem;
  }

  &__nav {
    @include mixins.justify();
  }

  &__link {
    color: variables.$text;
    font-weight: 600;
    font-size: variables.$fs-menu;
    text-decoration: none;

    &--separator {
      margin-right: 2.25rem;
    }
  }
}
</style>

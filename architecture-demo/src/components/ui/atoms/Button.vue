<template>
  <component :is="tag" :class="`btn btn--${theme}`">
    <slot></slot>
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'a', 'router-link'].includes(value);
    },
  },
  theme: {
    type: String,
    default: 'default',
    validator(value) {
      return ['primary', 'play'].includes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/settings/variables';

.btn {
  display: inline-block;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: variables.$fs-btn;
  text-align: center;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.2s;

  &--primary {
    color: variables.$white;
    background: variables.$blue-button;

    &:hover,
    &:focus-visible {
      transform: scale(1.2, 1.2);
    }
  }
}
</style>

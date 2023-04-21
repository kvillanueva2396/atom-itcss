<template>
  <article class="card">
    <img class="card__img" :alt="info.title" :src="`${info.img}`" />
    <h4 class="card__title">{{ info.title }}</h4>
    <p class="card__description">{{ info.description }}</p>
    <button :class="`card__button btn btn--s btn--${info.theme}`">
      Learn More
    </button>
  </article>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/settings/variables';
@use '@/styles/tools/mixins';

.card {
  @include mixins.justify($flex-direction: column);
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &__img {
    height: 6rem;
  }
}
</style>

<template>
  <section class="cover-background cover-background--white">
    <div class="hero container">
      <h2 class="hero__title">Build your dream Workstation.</h2>
      <div class="slogan">
        <div class="slogan-info">
          <p class="slogan__text">
            We 're going to help you create your ideal Workstation
          </p>
          <button class="slogan__button btn btn--primary btn--md">
            Let's go
          </button>
        </div>
        <img
          class="slogan__img"
          src="@/assets/images/work-station.png"
          alt="workstation-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/styles/settings/variables';
@use '@/styles/tools/mixins';

.hero {
  @include mixins.justify();
  gap: 1rem;
  padding-top: variables.$spacing;
  padding-bottom: variables.$spacing-l;

  &__title {
    width: 100%;
    text-align: center;
  }
}

.slogan {
  @include mixins.justify();
  margin: 0 auto;
  gap: 3rem;

  &-info {
    width: 30%;
    @include mixins.justify($flex-direction: column);
  }

  &__text {
    font-size: variables.$fs-slogan-text;
    text-align: center;
  }

  &__button {
    margin-top: 2rem;
  }

  &__img {
    max-height: variables.$size-slogan-image;
    width: 60%;
  }
}

@media (max-width: 955px) {
  .slogan {
    &-info {
      width: 100%;
    }

    &__img {
      display: none;
    }
  }
}
</style>

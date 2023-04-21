<template>
  <section class="collection">
    <div class="container">
      <h3 class="collection__title">Our Collection</h3>
      <div class="collection__cards">
        <Card v-for="card in cards" :key="card.id" :info="card" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api';
import { Card } from '@/components';

const cards = ref(null);

onMounted(async () => {
  cards.value = await api.getCards();
});
</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixins';

.collection {
  &__cards {
    column-width: 18rem;
    gap: 1.3rem;
  }
}
</style>

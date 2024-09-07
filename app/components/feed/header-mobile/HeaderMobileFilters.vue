<script setup lang="ts">
const { setAdvertClassification, matchesAdvertClassification, uiData } = useQueryParams();
</script>

<template>
  <div class="filters">
    <FeedHeaderMobileFiltersButton v-for="filter in uiData" :key="filter" :is-active="matchesAdvertClassification(filter)" @click="setAdvertClassification(filter)">
      {{ filter }}
    </FeedHeaderMobileFiltersButton>
    <FeedHeaderMobileFiltersButton disabled>
      Offers
    </FeedHeaderMobileFiltersButton>
  </div>
</template>

<style scoped lang="scss">
.filters {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
}
</style>

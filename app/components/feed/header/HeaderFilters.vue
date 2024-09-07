<script setup lang="ts">
const { setAdvertClassification, matchesAdvertClassification, uiData } = useQueryParams();

function setVariant(classification: typeof uiData[number]) {
  return matchesAdvertClassification(classification) ? "brand" : "outline";
}
</script>

<template>
  <div class="filters">
    <UiButton v-for="filter in uiData" :key="filter" :variant="setVariant(filter)" @click="setAdvertClassification(filter)">
      {{ filter }}
    </UiButton>
    <UiButton is-disabled>
      Offers
    </UiButton>
  </div>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "styles:size";

.filters {
  display: grid;
  grid-auto-flow: column;
  gap: var(--sz-spacing-2xs);
  max-width: max-content;
}
</style>

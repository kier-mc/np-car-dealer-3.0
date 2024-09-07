<script setup lang="ts"></script>

<template>
  <div class="primary">
    <FeedVehicleCardBodyHeadingTitle class="primary__title" />
    <FeedVehicleCardBodyHeadingSpec class="primary__spec" />
    <FeedVehicleCardHeaderCondition class="primary__condition" />
    <FeedVehicleCardBodyFavouriteButton class="primary__favourite" />
  </div>
</template>

<style scoped lang="scss">
.primary {
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: repeat(2, auto);
  column-gap: var(--sz-spacing-xs);

  &__title {
    align-self: center;
    grid-column: 1;
    grid-row: 1;
  }

  &__spec {
    grid-column: 1;
    grid-row: 2;
  }

  &__condition {
    align-self: center;
    grid-column: 2;
    grid-row: 1;
  }

  &__favourite {
    grid-column: 3;
    grid-row: 1;
  }
}
</style>

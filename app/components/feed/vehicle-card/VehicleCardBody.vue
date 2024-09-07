<script setup lang="ts"></script>

<template>
  <div class="body">
    <FeedVehicleCardBodyHeading class="body__heading" />
    <FeedVehicleCardBodyFavouriteButton class="body__favourite" />
    <FeedVehicleCardBodyPricing class="body__pricing" />
    <FeedVehicleCardBodyViewButton class="body__view" />
  </div>
</template>

<style scoped lang="scss">
.body {
  grid-row: span 2;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: subgrid;
  column-gap: var(--sz-spacing-2xs);
  row-gap: 0rem;
  padding: var(--sz-spacing-xs);

  &__heading {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
  }

  &__favourite {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    align-self: start;
  }

  &__pricing {
    grid-column: 1;
    grid-row: 2;
  }

  &__view {
    grid-column: 2;
    grid-row: 2;
    align-self: end;
  }
}
</style>

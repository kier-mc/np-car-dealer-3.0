<script setup lang="ts"></script>

<template>
  <div class="secondary">
    <FeedVehicleCardMobileDetailsSecondaryRowInfo class="secondary__tags" />
    <FeedVehicleCardBodyPricingFinance class="secondary__finance" />
    <FeedVehicleCardBodyPricingTotal class="secondary__total" />
  </div>
</template>

<style scoped lang="scss">
.secondary {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, auto);
  column-gap: var(--sz-spacing-xs);

  &__tags {
    grid-column: 1;
    grid-row: span 2;
  }

  &__finance {
    grid-column: 2;
    grid-row: 1;
  }

  &__total {
    grid-column: 2;
    grid-row: 2;
  }
}
</style>

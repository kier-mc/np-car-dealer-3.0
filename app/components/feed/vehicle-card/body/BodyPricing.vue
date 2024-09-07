<script setup lang="ts"></script>

<template>
  <div class="pricing">
    <FeedVehicleCardBodyPricingFinance class="pricing__finance" />
    <FeedVehicleCardBodyPricingTotal class="pricing__total" />
  </div>
</template>

<style scoped lang="scss">
.pricing {
  display: grid;

  &__finance {
    grid-column: 1;
    grid-row: 1;
  }

  &__total {
    grid-column: 1;
    grid-row: 2;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="header">
    <h2 class="header__title">
      Value your car
    </h2>
    <span>Find out the value of your car in just a few minutes.</span>
  </div>
</template>

<style scoped lang="scss">
@use "mixins:reset";

.header {
  display: grid;
  row-gap: var(--sz-spacing-sm);
  text-align: center;

  &__title {
    @include reset.heading();

    line-height: 1em;
    font-size: var(--sz-text-xl);
    font-weight: 500;
  }
}
</style>

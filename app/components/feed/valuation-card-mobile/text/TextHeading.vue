<script setup lang="ts"></script>

<template>
  <h2 class="heading">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
@use "mixins:reset";

.heading {
  @include reset.heading();

  line-height: 1em;
  font-size: var(--sz-text-lg);
  font-weight: 600;
}
</style>

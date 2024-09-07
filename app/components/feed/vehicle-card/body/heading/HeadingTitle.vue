<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;

const title = computed(() => {
  const { make, model, plate } = data;
  return `${plate} ${make} ${model}`;
});
</script>

<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "styles:size";

.title {
  @include reset.heading();
  line-height: calc(1em + 0.25em);

  @media (max-width: #{size.breakpoint("mobile")}) {
    line-height: calc(1em + 0.375em);
    font-size: var(--sz-text-sm);
  }
}
</style>

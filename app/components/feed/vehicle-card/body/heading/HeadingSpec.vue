<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;

const spec = computed(() => {
  const { derivative } = data;
  return derivative;
});
</script>

<template>
  <span class="spec">
    {{ spec }}
  </span>
</template>

<style scoped lang="scss">
@use "styles:size";

.spec {
  line-height: 1.5em;
  color: var(--cl-text-mid);
  font-size: var(--sz-text-xs);

  @media (max-width: #{size.breakpoint("mobile")}) {
    line-height: 1em;
  }
}
</style>

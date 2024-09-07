<script setup lang="ts">
import type { Gallery } from "../../HeaderGallery.vue";

const { current, total } = inject("gallery") as Gallery;
</script>

<template>
  <span class="count">
    {{ current + 1 }} of {{ total }}
  </span>
</template>

<style scoped lang="scss">
.count {
  color: var(--cl-text-light);
  font-size: var(--sz-text-xs);
  font-variant-numeric: tabular-nums;
}
</style>

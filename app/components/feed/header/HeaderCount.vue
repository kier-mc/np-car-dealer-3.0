<script setup lang="ts">
import type { Metadata } from "~~/types/api";

const meta = useState<Metadata>("api-meta");

const vehicleCount = computed(() => {
  const { total } = meta.value;
  return total > 1 ? `${total} cars` : `${total} car`;
});
</script>

<template>
  <span class="count">
    {{ vehicleCount }}
  </span>
</template>

<style scoped lang="scss">
@use "styles:size";

.count {
  font-variant-numeric: tabular-nums;
  font-weight: 600;

  &::before {
    content: "Showing ";
  }

  @media (max-width: #{size.breakpoint("desktop")}) {
    &::before {
      content: "";
    }
  }
}
</style>

<script setup lang="ts">
import type { Metadata } from "~~/types/api";

const meta = useState<Metadata>("api-meta");

const vehicleCount = computed(() => {
  const { per_page, total } = meta.value;
  const count = per_page >= total ? total : per_page;
  return total > 1 ? `Showing ${count} of ${total} cars` : `Showing ${count} of ${total} car`;
});
</script>

<template>
  <span class="count">
    {{ vehicleCount }}
  </span>
</template>

<style scoped lang="scss">
.count {
  font-variant-numeric: tabular-nums;
  font-size: var(--sz-text-sm);
}
</style>

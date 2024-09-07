<script setup lang="ts">
const { results } = useFeedSorting();
</script>

<template>
  <div class="feed">
    <template v-for="(vehicle, index) in results" :key="vehicle._key">
      <template v-if="index === 4">
        <FeedValuationCard />
        <FeedVehicleCard :data="vehicle" />
      </template>
      <FeedVehicleCard v-else :data="vehicle" />
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "styles:size";

.feed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, auto));
  grid-template-rows: auto auto auto auto 1fr 1fr;
  gap: var(--sz-spacing-md);

  @media (max-width: #{size.breakpoint("tablet")}) {
    grid-template-columns: repeat(2, auto);
  }
}
</style>

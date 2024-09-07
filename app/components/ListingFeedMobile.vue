<script setup lang="ts">
const { results } = useFeedSorting();
</script>

<template>
  <div class="feed">
    <template v-for="(vehicle, index) in results" :key="vehicle._key">
      <template v-if="index === 4">
        <FeedValuationCardMobile />
        <FeedVehicleCardMobile :data="vehicle" />
      </template>
      <FeedVehicleCardMobile v-else :data="vehicle" />
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "styles:size";

.feed {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: auto auto auto auto 1fr 1fr;
  gap: var(--sz-spacing-xl);
  margin-block-end: var(--sz-spacing-2xl);
}
</style>

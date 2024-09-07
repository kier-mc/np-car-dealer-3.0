<script setup lang="ts"></script>

<template>
  <div class="navigation">
    <FeedVehicleCardHeaderGalleryNavigationCount />
    <FeedVehicleCardHeaderGalleryNavigationControls />
  </div>
</template>

<style scoped lang="scss">
.navigation {
  grid-column: 1;
  grid-row: 1;
  justify-self: end;
  align-self: start;
  display: flex;
  align-items: center;
  gap: var(--sz-spacing-xs);
  margin: var(--sz-spacing-xs);
}
</style>

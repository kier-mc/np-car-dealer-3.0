<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;
const { media_urls } = data;

const images = computed(() => {
  return media_urls.slice(0, -5);
});
</script>

<template>
  <div class="gallery">
    <FeedVehicleCardHeaderGalleryImage v-for="{ thumb } in images" :key="thumb" class="gallery__image" :src="thumb" />
  </div>
</template>

<style scoped lang="scss">
.gallery {
  overflow-x: scroll;
  display: flex;
  gap: var(--sz-spacing-2xs);
  padding-inline: var(--sz-spacing-sm);

  &__image {
    flex: 0 0 auto;
    max-inline-size: 32%;
    border-radius: var(--sz-radius-md);
  }
}
</style>

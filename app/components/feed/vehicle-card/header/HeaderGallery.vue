<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;
const { media_urls } = data;

const images = computed(() => {
  return media_urls.slice(0, -5);
});

export interface Gallery {
  current: Ref<number>;
  total: Ref<number>;
  increment: () => void;
  decrement: () => void;
}

const current = ref<number>(0);
const total = computed(() => images.value.length);

function increment() {
  current.value++;
};

function decrement() {
  current.value--;
};

provide<Gallery>("gallery", {
  current,
  total,
  increment,
  decrement,
});

const translationAmount = computed(() => {
  return `${current.value * 100 * -1}%`;
});
</script>

<template>
  <div class="gallery" tabindex="-1">
    <FeedVehicleCardHeaderGalleryNavigation />
    <div class="gallery__track">
      <div v-for="{ thumb } in images" :key="thumb" class="gallery__slide">
        <FeedVehicleCardHeaderGalleryImage :src="thumb" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery {
  grid-row: 1 / -1;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: subgrid;
  border-radius: var(--sz-radius-md) var(--sz-radius-md) 0 0;

  &__track {
    --translation-amount: v-bind(translationAmount);

    grid-column: 1;
    grid-row: 1 / -1;
    display: flex;
    z-index: -20;
    transform: translateX(var(--translation-amount, 0%));
    transition: transform var(--tm-250) var(--ef-out-quart);
  }

  &__slide {
    flex: 0 0 auto;
    inline-size: 100%;
  }
}
</style>

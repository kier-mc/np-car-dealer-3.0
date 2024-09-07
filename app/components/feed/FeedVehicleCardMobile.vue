<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

interface Props {
  data: Vehicle;
}

const props = defineProps<Props>();
const { data } = props;

provide<Vehicle>("data", data);
</script>

<template>
  <UiCard element="article" :shadow="false" class="card">
    <FeedVehicleCardMobileGallery />
    <FeedVehicleCardMobileDetails />
  </UiCard>
</template>

<style scoped lang="scss">
.card {
  display: grid;
  gap: var(--sz-spacing-lg);
}
</style>

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
  <UiCard element="article" class="card">
    <FeedVehicleCardHeader />
    <FeedVehicleCardBody />
  </UiCard>
</template>

<style scoped lang="scss">
.card {
  grid-row: span 3;
  display: grid;
  grid-template-rows: subgrid;
  gap: 0rem;
}
</style>

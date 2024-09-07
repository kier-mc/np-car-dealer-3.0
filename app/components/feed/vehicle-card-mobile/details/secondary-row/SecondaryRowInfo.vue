<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;

const info = computed(() => {
  const { body_type, fuel_type, odometer_value, transmission } = data;
  const _mileage = Math.round(odometer_value / 1000) * 1000;
  const mileage = `${Math.round(_mileage) / 1000}k miles`;
  return { mileage, fuel_type, transmission, body_type };
});
</script>

<template>
  <div class="info">
    <div class="info__row">
      <div class="info__item">
        {{ info.mileage }}
      </div>
      <div class="info__item">
        {{ info.fuel_type }}
      </div>
    </div>
    <div class="info__row">
      <div class="info__item">
        {{ info.transmission }}
      </div>
      <div class="info__item">
        {{ info.body_type }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  display: grid;
  grid-template-rows: repeat(2, auto);

  &__row {
    display: flex;
    align-items: center;
  }

  &__item {
    line-height: 1em;
    color: var(--cl-text-mid);
    font-size: var(--sz-text-xs);
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }

    &:not(:last-of-type) {
      &::after {
        content: "|";
        line-height: 1em;
        margin-inline: var(--sz-spacing-2xs);
        color: var(--cl-text-disabled);
        font-size: var(--sz-spacing-xs);
      }
    }
  }
}
</style>

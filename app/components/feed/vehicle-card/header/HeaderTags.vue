<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;

interface Tag extends UseVueKey {
  label: string;
}

const tags = computed((): Tag[] => {
  const { body_type, fuel_type, odometer_value, transmission } = data;
  const _mileage = Math.round(odometer_value / 1000) * 1000;
  const mileage = `${Math.round(_mileage) / 1000}k miles`;
  return [
    {
      _key: Symbol(),
      label: mileage,
    },
    {
      _key: Symbol(),
      label: fuel_type,
    },
    {
      _key: Symbol(),
      label: transmission,
    },
    {
      _key: Symbol(),
      label: body_type,
    },
  ];
});
</script>

<template>
  <div class="tags">
    <FeedVehicleCardHeaderTagsTag v-for="tag in tags" :key="tag._key">
      {{ tag.label }}
    </FeedVehicleCardHeaderTagsTag>
  </div>
</template>

<style scoped lang="scss">
.tags {
  display: inline-flex;
  flex-wrap: wrap-reverse;
  align-self: end;
  gap: var(--sz-spacing-2xs);

  &__tag {
    align-self: end;
    padding-inline: var(--sz-spacing-xs);
    padding-block: var(--sz-spacing-2xs);
    border-radius: var(--sz-radius-xs);
  }

  &__label {
    line-height: 1em;
    color: var(--cl-text-light);
    font-size: var(--sz-text-xs);
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

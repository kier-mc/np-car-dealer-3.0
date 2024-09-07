<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;
const { advert_classification } = data;
</script>

<template>
  <UiChip class="condition">
    <span class="condition__label">{{ advert_classification }}</span>
  </UiChip>
</template>

<style scoped lang="scss">
@use "styles:size";

.condition {
  align-self: start;
  padding-inline: var(--sz-spacing-xs);
  padding-block: var(--sz-spacing-3xs);
  border-radius: var(--sz-radius-xs);

  @media (max-width: #{size.breakpoint("mobile")}) {
    padding-block: 0rem;
  }

  &__label {
    color: var(--cl-text-light);
    font-weight: 500;
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }

    @media (max-width: #{size.breakpoint("mobile")}) {
      font-size: var(--sz-text-xs);
      font-weight: initial;
    }
  }
}
</style>

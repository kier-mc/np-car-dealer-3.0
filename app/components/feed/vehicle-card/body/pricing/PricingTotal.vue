<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;

const { price } = data;
</script>

<template>
  <div class="total">
    <span class="total__price">
      {{ price }}
    </span>
    <UiLink class="total__calculate" variant="brand">
      Calculate finance
    </UiLink>
  </div>
</template>

<style scoped lang="scss">
@use "styles:size";

.total {
  line-height: 1em;

  &__price {
    font-variant-numeric: tabular-nums;
    margin-inline-end: var(--sz-spacing-2xs);
    font-size: var(--sz-text-xs);

    &::before {
      content: "£";
    }
  }

  &__calculate {
    color: var(--cl-brand-primary);
    font-size: var(--sz-text-xs);
    text-decoration: none;

    @media (max-width: #{size.breakpoint("mobile")}) {
      display: none;
    }
  }
}
</style>

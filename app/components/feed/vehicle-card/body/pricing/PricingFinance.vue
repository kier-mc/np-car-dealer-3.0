<script setup lang="ts">
import type { Vehicle } from "~~/types/api";

const data = inject("data") as Vehicle;

const { monthly_finance_type, monthly_payment } = data;
</script>

<template>
  <div class="finance">
    <span class="finance__price">
      {{ monthly_payment }}
    </span>
    <span class="finance__type">
      ({{ monthly_finance_type }})
    </span>
  </div>
</template>

<style scoped lang="scss">
@use "styles:size";

.finance {
  line-height: 1em;

  &__price {
    margin-inline-end: var(--sz-spacing-2xs);
    font-size: var(--sz-text-lg);
    font-weight: 600;

    @media (max-width: #{size.breakpoint("mobile")}) {
      font-size: var(--sz-text-sm);
      font-weight: 700;
    }

    &::before {
      content: "£";
    }
  }

  &__type {
    font-size: var(--sz-text-xs);

    &::before {
      content: "/mo";
    }
  }
}
</style>

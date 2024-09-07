<script setup lang="ts">
import type { Gallery } from "../../HeaderGallery.vue";

const { current, total, increment, decrement } = inject("gallery") as Gallery;
</script>

<template>
  <div class="controls">
    <UiButton variant="dark" :disabled="current === 0" @click="decrement()">
      <UiIcon icon="chevron-left-16-solid" />
    </UiButton>
    <UiButton variant="dark" :disabled="current + 1 === total" @click="increment()">
      <UiIcon icon="chevron-right-16-solid" />
    </UiButton>
  </div>
</template>

<style scoped lang="scss">
@use "mixins:ui";

.controls {
  display: flex;
  gap: var(--sz-spacing-2xs);

  & button {
    --border-radius: var(--sz-radius-xs);
    --border-width: var(--sz-border-px);

    padding-inline: var(--sz-spacing-2xs);
    padding-block: 0rem;
    border: var(--sz-border-px) solid var(--cl-fw-border-alpha);
    border-radius: var(--border-radius);

    &::before {
      @include ui.button-focus($parent-border-width: var(--sz-border-px), $parent-border-radius: var(--border-radius));
    }

    & span {
      background-color: var(--cl-text-light);
    }
  }
}
</style>

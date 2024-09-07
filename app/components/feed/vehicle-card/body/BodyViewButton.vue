<script setup lang="ts"></script>

<template>
  <UiButton class="button" variant="brand">
    View
  </UiButton>
</template>

<style scoped lang="scss">
@use "mixins:ui";

.button {
  --border-radius: var(--sz-radius-md);

  padding-block: var(--sz-spacing-xs);
  border-radius: var(--border-radius);

  &::before {
    @include ui.button-focus($parent-border-radius: var(--border-radius));
  }
}
</style>

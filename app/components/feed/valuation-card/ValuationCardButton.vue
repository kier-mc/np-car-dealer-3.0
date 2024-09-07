<script setup lang="ts"></script>

<template>
  <UiButton class="button" variant="brand">
    <slot />
  </UiButton>
</template>

<style scoped lang="scss">
@use "mixins:ui";

.button {
  --border-radius: var(--sz-radius-md);

  max-width: 100%;
  padding-inline: var(--sz-spacing-sm);
  padding-block: var(--sz-spacing-sm);
  border-radius: var(--border-radius);

  &::before {
    @include ui.button-focus($parent-border-radius: var(--border-radius));
  }
}
</style>

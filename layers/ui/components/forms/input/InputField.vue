<script setup lang="ts"></script>

<template>
  <div class="field">
    <input class="field__input" type="text" v-bind="$attrs">
  </div>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "mixins:ui";

.field {
  --border-radius: var(--sz-radius-md);

  position: relative;

  &::before {
    @include ui.button-focus($parent-border-radius: var(--sz-radius-md));
  }

  &:focus-within::before {
    opacity: 1;
  }

  &__input {
    @include reset.input();

    padding: var(--sz-spacing-sm);
    border-radius: var(--border-radius);
    background-color: var(--cl-fw-background);

    &::placeholder {
      color: var(--cl-text-mid);
    }
  }
}
</style>

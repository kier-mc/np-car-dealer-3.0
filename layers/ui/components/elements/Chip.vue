<script setup lang="ts"></script>

<template>
  <span class="chip">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.chip {
  display: inline-flex;
  max-width: max-content;
  border: var(--sz-border-px) solid var(--cl-fw-border-alpha);
  background-color: var(--cl-fw-dark);
}
</style>

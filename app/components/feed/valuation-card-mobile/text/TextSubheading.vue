<script setup lang="ts"></script>

<template>
  <span class="subheading">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.subheading {
  line-height: 1em;
  font-size: var(--sz-text-xs);
}
</style>

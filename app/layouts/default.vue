<script setup lang="ts"></script>

<template>
  <div id="top" class="layout">
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
@use "styles:size";

.layout {
  display: grid;
  max-width: size.breakpoint("desktop");
  margin-inline: auto;
}
</style>

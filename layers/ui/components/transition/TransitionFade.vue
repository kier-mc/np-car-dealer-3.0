<script setup lang="ts"></script>

<template>
  <Transition>
    <slot />
  </Transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity var(--tm-150) var(--ef-out-quart);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

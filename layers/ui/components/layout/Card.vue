<script setup lang="ts">
interface Props {
  element?: string;
  shadow?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  element: "div",
  shadow: true,
});
const { element } = props;

const getCardClass = computed(() => {
  const { shadow } = props;
  return shadow ? "card card--shadow" : "card";
});
</script>

<template>
  <component :is="element" :class="getCardClass">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.card {
  border-radius: var(--sz-radius-md);

  &--shadow {
    box-shadow: 0px 8px 24px 0px var(--cl-fw-shadow);
  }
}
</style>

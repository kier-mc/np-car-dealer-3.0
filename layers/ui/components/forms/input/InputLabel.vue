<script setup lang="ts">
interface Props {
  required?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  required: false,
});

const getLabelClass = computed(() => {
  const { required } = props;
  return required ? "label label--required" : "label";
});
</script>

<template>
  <label :class="getLabelClass">
    <slot />
  </label>
</template>

<style scoped lang="scss">
.label {
  pointer-events: none;
  user-select: none;
  display: flex;
  width: max-content;
  height: max-content;
  padding-inline: var(--sz-spacing-xs);
  border-radius: var(--sz-radius-sm);
  margin-inline-start: var(--sz-spacing-xs);
  margin-block-start: calc(var(--sz-spacing-sm) * -1);
  background-color: var(--cl-fw-light);
  font-size: var(--sz-text-xs);

  &--required::after {
    content: "*";
    margin-inline-start: var(--sz-spacing-2xs);
    color: var(--cl-danger-primary);
  }
}
</style>

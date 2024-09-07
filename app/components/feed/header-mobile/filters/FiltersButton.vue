<script setup lang="ts">
interface Props {
  isActive?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
});

const getClass = computed(() => {
  const { isActive } = props;
  return isActive ? "button button--active" : "button";
});
</script>

<template>
  <button :class="getClass" type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "mixins:ui";
@use "styles:size";

.button {
  @include reset.button();

  display: grid;
  place-items: center;
  padding-block: var(--sz-spacing-sm);
  font-size: var(--sz-text-sm);

  &::before {
    @include ui.button-focus();

    margin: 0rem;
  }

  &:focus-visible::before {
    opacity: 1;
  }

  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    inset-inline: 0;
    inset-block: 100%;
    inset-block-end: calc(var(--sz-border-md) * -1);
    background-color: var(--cl-brand-primary);
    opacity: 0;
    transition: opacity var(--tm-250) var(--ef-out-quart);
  }

  &--active {
    &::after {
      opacity: 1;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>

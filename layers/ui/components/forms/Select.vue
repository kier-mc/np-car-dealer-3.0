<script setup lang="ts">
interface Props {
  selected?: string;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: "update:selected", data: string): void;
}>();

const selected = computed({
  get: () => props.selected ?? "",
  set: (value: string) => {
    emit("update:selected", value);
  },
});
</script>

<template>
  <div class="select">
    <select v-model="selected" class="select__element">
      <slot />
    </select>
    <UiIcon class="select__icon" icon="chevron-down-16-solid" />
  </div>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "mixins:ui";

.select {
  --border-radius: var(--sz-radius-md);
  --padding-inline: var(--sz-spacing-sm);

  position: relative;
  display: grid;
  grid-template-areas: "select";
  max-width: max-content;
  border-radius: var(--border-radius);
  background-color: var(--cl-fw-light);

  &::before {
    @include ui.button-focus($parent-border-radius: var(--border-radius));
  }

  &:has(:focus-visible)::before {
    opacity: 1;
  }

  &__element {
    @include reset.select();

    grid-area: select;
    padding-inline-start: var(--padding-inline);
    padding-inline-end: var(--sz-spacing-3xl);
    padding-block: var(--sz-spacing-sm);
    color: var(--cl-text-mid);
  }

  &__icon {
    pointer-events: none;
    grid-area: select;
    justify-self: end;
    align-self: center;
    margin-inline-end: var(--padding-inline);
  }
}
</style>

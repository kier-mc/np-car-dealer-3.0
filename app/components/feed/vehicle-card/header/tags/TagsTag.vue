<template>
  <UiChip class="tag">
    <span class="tag__label">
      <slot />
    </span>
  </UiChip>
</template>

<style scoped lang="scss">
.tag {
  align-self: end;
  padding-inline: var(--sz-spacing-xs);
  padding-block: var(--sz-spacing-2xs);
  border-radius: var(--sz-radius-xs);

  &__label {
    line-height: 1em;
    color: var(--cl-text-light);
    font-size: var(--sz-text-xs);
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

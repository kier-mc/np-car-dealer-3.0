<script setup lang="ts">
interface Props {
  isDisabled?: boolean;
  variant?: "brand" | "dark" | "outline";
};

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  variant: "outline",
});
const { isDisabled } = props;

const getButtonClass = computed(() => {
  const { variant } = props;
  switch (variant) {
    case "brand":
      return "button button--brand";
    case "dark":
      return "button button--dark";
    case "outline":
      return "button button--outline";
    default:
      return "button button--outline";
  };
});

const getLabelClass = computed(() => {
  const { variant } = props;
  switch (variant) {
    case "brand":
      return "button__label button__label--brand";
    case "dark":
      return "button__label button__label--dark";
    case "outline":
      return "button__label button__label--outline";
    default:
      return "button__label button__label--outline";
  };
});
</script>

<template>
  <button :class="getButtonClass" :disabled="isDisabled" type="button">
    <span :class="getLabelClass">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "mixins:ui";

.button {
  --border-radius: var(--sz-radius-sm);
  --border-width: var(--sz-border-px);

  @include reset.button();

  display: grid;
  place-content: center;
  max-width: max-content;
  padding-inline: var(--sz-spacing-xl);
  padding-block: var(--sz-spacing-3xs);
  border: var(--border-width) solid transparent;
  border-radius: var(--border-radius);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &--brand {
    background-color: var(--cl-brand-primary);
    transition: background-color var(--tm-500) var(--ef-out-quart);

    &::before {
      @include ui.button-focus($parent-border-width: var(--border-width), $parent-border-radius: var(--border-radius));
    }

    &:focus-visible::before {
      opacity: 1;
    }

    &:not(:disabled):hover {
      background-color: color-mix(in srgb, var(--cl-brand-primary), black 20%);
    }
  }

  &--dark {
    background-color: var(--cl-fw-dark);
    transition: background-color var(--tm-500) var(--ef-out-quart);

    &::before {
      @include ui.button-focus($parent-border-width: var(--border-width), $parent-border-radius: var(--border-radius));
    }

    &:focus-visible::before {
      opacity: 1;
    }

    &:not(:disabled):hover {
      background-color: color-mix(in srgb, var(--cl-fw-dark), black 20%);
    }
  }

  &--outline {
    border: var(--border-width) solid var(--cl-fw-border);
    transition: border-color var(--tm-500) var(--ef-out-quart);

    &::before {
      @include ui.button-focus($parent-border-width: var(--border-width), $parent-border-radius: var(--border-radius));
    }

    &:focus-visible::before {
      opacity: 1;
    }

    &:focus-visible {
      border-color: color-mix(in srgb, var(--cl-brand-primary), white 40%);
    }

    &:not(:disabled):hover {
      border-color: color-mix(in srgb, var(--cl-fw-border), black 40%);
    }

    &:focus-visible:not(:disabled):hover {
      border-color: color-mix(in srgb, var(--cl-brand-primary), white 20%);
    }
  }

  &__label {
    display: grid;
    grid-auto-flow: column;
    font-variant-numeric: tabular-nums;
    transition: color var(--tm-250) var(--ef-out-quart);

    &--brand {
      color: var(--cl-text-light);
      font-weight: 500;
    }

    &--outline {
      color: var(--cl-text-mid);
    }
  }
}
</style>

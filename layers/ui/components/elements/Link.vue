<script setup lang="ts">
interface Props {
  href?: string;
  variant?: "brand" | "default" | "jump";
};

const props = withDefaults(defineProps<Props>(), {
  href: "#",
  variant: "default",
});
const { href } = props;

const getClass = computed(() => {
  const { variant } = props;
  switch (variant) {
    case "brand":
      return "link link--brand";
    case "default":
      return "link";
    case "jump":
      return "link link--jump";
    default:
      return "link";
  };
});
</script>

<template>
  <a :class="getClass" :href>
    <slot />
  </a>
</template>

<style scoped lang="scss">
.link {
  display: inline-block;
  max-width: max-content;
  text-underline-offset: var(--sz-spacing-2xs);
  transition: color var(--tm-250) var(--ef-out-quart);

  &:focus {
    outline-offset: var(--sz-spacing-2xs);
  }

  &--brand {
    color: var(--cl-brand-primary);
    text-decoration: none;

    &:focus {
      outline: var(--sz-border-sm) solid var(--cl-brand-primary);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &--jump {
    color: var(--cl-text-mid);

    &:focus {
      outline: var(--sz-border-sm) solid var(--cl-text-mid);
    }

    &:hover {
      color: var(--cl-text-dark);
    }
  }
}
</style>

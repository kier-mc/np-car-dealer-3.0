<script setup lang="ts">
interface Props {
  collection?: string;
  colour?: string;
  icon: string;
  size?: string;
};

const props = withDefaults(defineProps<Props>(), {
  collection: "heroicons",
  colour: "currentColor",
  size: "var(--sz-icon-sm)",
});

const getColour = computed(() => {
  const { colour } = props;
  return colour;
});

const getSize = computed(() => {
  const { size } = props;
  return size;
});

const getUrl = computed(() => {
  const { collection, icon } = props;
  return `url("https://api.iconify.design/${collection}/${icon}.svg")`;
});
</script>

<template>
  <span class="icon" />
</template>

<style scoped lang="scss">
.icon {
  --colour: v-bind(getColour);
  --size: v-bind(getSize);
  --url: v-bind(getUrl);

  display: inline-block;
  aspect-ratio: 1/1;
  width: var(--size, var(--sz-icon-sm));
  height: var(--size, var(--sz-icon-sm));
  background-color: var(--colour);
  mask-image: var(--url);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}
</style>

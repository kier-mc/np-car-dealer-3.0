<script setup lang="ts">
interface Props {
  src?: string;
};

const props = withDefaults(defineProps<Props>(), {
  src: "https://placehold.co/320x213?text=No+Image+Available",
});
const { src } = props;
</script>

<template>
  <img class="image" :src alt="" loading="lazy" width="320" height="213">
</template>

<style scoped lang="scss">
.image {
  pointer-events: none;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  object-position: top;
}
</style>

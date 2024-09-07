<script setup lang="ts">
const isFavourite = ref<boolean>(false);

function toggleFavourite() {
  isFavourite.value = !isFavourite.value;
};
</script>

<template>
  <button class="button" type="button" aria-label="add to favourites" @click="toggleFavourite()">
    <UiTransitionFade mode="out-in">
      <UiIcon v-if="isFavourite" colour="var(--cl-brand-primary)" icon="star-20-solid" />
      <UiIcon v-else icon="star" />
    </UiTransitionFade>
  </button>
</template>

<style scoped lang="scss">
@use "mixins:reset";
@use "mixins:ui";

.button {
  @include reset.button();
  display: grid;
  position: relative;

  &::before {
    @include ui.button-focus();

    border-radius: 50%;
    margin: (calc(var(--sz-border-xl) * -1));
  }

  &:focus-visible::before {
    opacity: 1;
  }
}
</style>

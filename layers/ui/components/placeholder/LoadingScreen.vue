<script setup lang="ts">
const nuxtApp = useNuxtApp();
const isReady = ref<boolean>(false);
nuxtApp.hook("page:loading:end", () => { isReady.value = true; });
onMounted(() => isReady.value = true);
</script>

<template>
  <UiTransitionFade>
    <slot v-if="isReady" />
    <div v-else class="loading">
      <UiIcon collection="svg-spinners" icon="3-dots-move" size="var(--sz-icon-2xl)" colour="var(--cl-brand-primary)" />
      <p>Fetching the best vehicle deals for you...</p>
    </div>
  </UiTransitionFade>
</template>

<style scoped lang="scss">
.loading {
  display: grid;
  justify-content: center;

  & :first-child {
    justify-self: center;
  }
}
</style>

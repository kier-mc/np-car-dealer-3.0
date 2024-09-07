<script setup lang="ts">
await useDataset();

const header = computed(() => {
  const { isMobile } = useScreenSize();
  const header = isMobile.value
    ? () => import ("../components/feed/FeedHeaderMobile.vue")
    : () => import ("../components/feed/FeedHeader.vue");
  return defineAsyncComponent(header);
});

const feed = computed(() => {
  const { isMobile } = useScreenSize();
  const feed = isMobile.value
    ? () => import ("../components/ListingFeedMobile.vue")
    : () => import ("../components/ListingFeed.vue");
  return defineAsyncComponent(feed);
});
</script>

<template>
  <UiLoadingScreen>
    <main class="grid">
      <component :is="header" />
      <component :is="feed" />
      <FeedFooter />
    </main>
  </UiLoadingScreen>
</template>

<style scoped lang="scss">
@use "styles:size";

.grid {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: var(--sz-spacing-xl);
  min-height: 100svh;
  padding-inline: var(--sz-spacing-2xl);
  padding-block: var(--sz-spacing-md);

  @media (max-width: #{size.breakpoint("mobile")}) {
    gap: var(--sz-spacing-sm);
    padding-inline: 0rem;
    padding-block-start: 0rem;
  }
}
</style>

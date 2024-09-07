<script setup lang="ts"></script>

<template>
  <header class="header">
    <FeedHeaderCount class="header__count" />
    <FeedHeaderFilters class="header__filters" />
    <FeedSorting class="header__sorting" />
  </header>
</template>

<style scoped lang="scss">
@use "styles:size";

.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--sz-spacing-sm);

  &__count {
    margin-inline-end: var(--sz-spacing-lg);

    @media (max-width: #{size.breakpoint("tablet")}) {
      margin-inline-end: 0rem;
    }
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <header class="header">
    <FeedHeaderMobileFilters class="header__filters" />
    <FeedHeaderMobileCount class="header__count" />
    <FeedSorting class="header__sorting" />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: var(--sz-spacing-sm);

  &__filters {
    grid-column: 1 / -1;
  }

  &__count {
    justify-self: start;
    margin-inline-start: var(--sz-spacing-sm);
  }

  &__sorting {
    justify-self: end;
    margin-inline-end: var(--sz-spacing-2xs);
    background-color: transparent;
    font-size: var(--sz-text-sm);
    color: var(--cl-text-dark);
  }
}
</style>

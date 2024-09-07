<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <UiLink class="footer__jump" variant="jump" href="#top">
      Back to top
    </UiLink>
    <UiPaginator class="footer__paginator" />
    <FeedSorting class="footer__sorting" />
  </footer>
</template>

<style scoped lang="scss">
@use "styles:size";

.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: var(--sz-spacing-sm);

  &__jump {
    justify-self: start;
  }

  &__paginator {
    justify-self: center;
  }

  &__sorting {
    justify-self: end;
  }

  @media (max-width: #{size.breakpoint("mobile")}) {
    grid-template-columns: auto;
    gap: var(--sz-spacing-2xl);

    &__jump {
      grid-column: 1;
      grid-row: 2;
      justify-self: center;
    }

    &__paginator {
      grid-column: 1;
      grid-row: 1;
    }

    &__sorting {
      display: none;
    }
  }
}
</style>

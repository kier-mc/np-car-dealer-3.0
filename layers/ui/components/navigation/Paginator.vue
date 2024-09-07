<script setup lang="ts">
const { currentPage, lastPage, nextPage, previousPage, setPage, subsequentPage } = usePagination();

const key: Record<string, symbol> = {
  current: Symbol("current"),
  next: Symbol("next"),
  subsequent: Symbol("subsequent"),
};
</script>

<template>
  <div class="paginator" role="navigation" aria-label="results navigation">
    <UiButton :disabled="!previousPage" aria-label="go to previous page" @click="setPage(previousPage)">
      <UiIcon icon="chevron-left-16-solid" />
    </UiButton>
    <div class="paginator__ordinals">
      <TransitionGroup name="anim">
        <UiButton :key="key.current" variant="brand" aria-label="current page">
          {{ currentPage }}
        </UiButton>
        <UiButton v-if="nextPage" :key="key.next" :aria-label="`go to page ${nextPage}`" @click="setPage(nextPage)">
          {{ nextPage }}
        </UiButton>
        <UiButton v-if="subsequentPage" :key="key.subsequent" :aria-label="`go to page ${subsequentPage}`" @click="setPage(subsequentPage)">
          {{ subsequentPage }}
        </UiButton>
      </TransitionGroup>
    </div>
    <UiButton :disabled="!nextPage" aria-label="go to next page" @click="setPage(nextPage)">
      <UiIcon icon="chevron-right-16-solid" />
    </UiButton>
    <UiButton :disabled="currentPage === lastPage" aria-label="go to last page" @click="setPage(lastPage)">
      <UiIcon icon="chevron-double-right-16-solid" />
    </UiButton>
  </div>
</template>

<style scoped lang="scss">
@use "mixins:ui";

.paginator {
  --button-max-width: 5ch;

  display: grid;
  grid-auto-flow: column;
  gap: var(--sz-spacing-2xs);
  max-width: max-content;

  & button {
    --border-radius: var(--sz-radius-xs);

    max-width: var(--button-max-width);
    padding-inline: var(--sz-spacing-sm);
    border-radius: var(--border-radius);

    &::before {
      @include ui.button-focus($parent-border-width: 0px, $parent-border-radius: var(--border-radius));
    }
  }

  &__ordinals {
    display: grid;
    grid-template-columns: repeat(3, minmax(var(--button-max-width), auto));
    gap: var(--sz-spacing-2xs);
  }
}

.anim-move,
.anim-enter-active,
.anim-leave-active {
  transition-property: opacity, transform;
  transition-duration: var(--tm-250);
  transition-timing-function: var(--ef-out-quart);
}

.anim-enter-from,
.anim-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>

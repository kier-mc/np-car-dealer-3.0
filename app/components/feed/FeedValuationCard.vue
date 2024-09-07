<script setup lang="ts"></script>

<template>
  <UiCard element="article" :shadow="false" class="valuation">
    <FeedValuationCardHeader />
    <div class="valuation__fields">
      <UiInput placeholder="Enter VRM" :required="true">
        VRM
      </UiInput>
      <UiInput placeholder="Enter Mileage" :required="true">
        Mileage
      </UiInput>
    </div>
    <FeedValuationCardButton>
      Value my car
    </FeedValuationCardButton>
  </UiCard>
</template>

<style scoped lang="scss">
@use "mixins:ui";

.valuation {
  grid-row: span 3;
  display: grid;
  align-items: center;
  row-gap: var(--sz-spacing-sm);
  padding: var(--sz-spacing-lg);
  border: var(--sz-border-px) solid var(--cl-fw-border);
  background-color: var(--cl-fw-light);

  &__fields {
    display: grid;
    row-gap: var(--sz-spacing-xs);
  }

  &__button {
    --border-radius: var(--sz-radius-md);

    max-width: 100%;
    padding-block: var(--sz-spacing-sm);
    border-radius: var(--border-radius);

    &::before {
      @include ui.button-focus($parent-border-radius: var(--border-radius));
    }
  }
}
</style>

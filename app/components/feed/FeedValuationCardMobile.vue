<script setup lang="ts"></script>

<template>
  <UiCard element="article" :shadow="false" class="valuation">
    <FeedValuationCardMobileText>
      <template #heading>
        Value your car
      </template>
      <template #subheading>
        Find out in just a few minutes
      </template>
    </FeedValuationCardMobileText>
    <FeedValuationCardButton>
      Get valuation
    </FeedValuationCardButton>
  </UiCard>
</template>

<style scoped lang="scss">
.valuation {
  grid-row: span 3;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  gap: var(--sz-spacing-md);
  padding: var(--sz-spacing-md);
  border: var(--sz-border-px) solid var(--cl-fw-border);
  margin-inline: var(--sz-spacing-sm);
  background-color: var(--cl-fw-light);
}
</style>

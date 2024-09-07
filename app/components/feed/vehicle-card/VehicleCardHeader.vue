<template>
  <div class="header">
    <FeedVehicleCardHeaderCondition class="header__condition" />
    <FeedVehicleCardHeaderGallery class="header__gallery" />
    <FeedVehicleCardHeaderTags class="header__tags" />
  </div>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  &::before {
    grid-column: 1;
    grid-row: 1;
    content: "";
    border-radius: var(--sz-radius-md) var(--sz-radius-md) 0 0;
    background-image: linear-gradient(180deg, var(--cl-fw-card-fade), hsl(0, 0%, 100%, 0));
  }

  &__condition {
    grid-column: 1;
    grid-row: 1;
    z-index: 10;
    margin: var(--sz-spacing-xs);
  }

  &__gallery {
    grid-column: 1;
    grid-row: 1 / -1;
  }

  &__tags {
    grid-column: 1;
    grid-row: 3;
    z-index: 10;
    margin: var(--sz-spacing-xs);
  }
}
</style>

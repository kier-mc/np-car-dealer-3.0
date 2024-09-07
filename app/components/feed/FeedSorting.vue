<script setup lang="ts">
const { activeFilter, uiData } = useFeedSorting();
const id = useId();
</script>

<template>
  <span>
    <label class="label" :for="id">Sort results</label>
    <UiSelect :id v-model:selected="activeFilter">
      <option v-for="{ label, value } in uiData" :key="value" :value>
        {{ label }}
      </option>
    </UiSelect>
  </span>
</template>

<style scoped lang="scss">
@use "mixins:ui";

.label {
  @include ui.sr-only();
}
</style>

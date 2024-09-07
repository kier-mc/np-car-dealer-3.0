<script setup lang="ts">
const { activeFilter, uiData } = useFeedSorting();
</script>

<template>
  <UiSelect v-model:selected="activeFilter">
    <option v-for="{ label, value } in uiData" :key="value" :value>
      {{ label }}
    </option>
  </UiSelect>
</template>

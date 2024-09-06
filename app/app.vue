<script setup lang="ts">
import { QUERY_PARAMS } from "~~/utils/api";

useState("query-params", () => QUERY_PARAMS);
</script>

<template>
  <NuxtLayout>
    <slot />
  </NuxtLayout>
</template>

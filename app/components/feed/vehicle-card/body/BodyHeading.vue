<script setup lang="ts"></script>

<template>
  <div class="heading">
    <FeedVehicleCardBodyHeadingTitle />
    <FeedVehicleCardBodyHeadingSpec />
  </div>
</template>

<style scoped lang="scss">
.heading {
  display: grid;
  grid-template-rows: repeat(2, auto);
}
</style>

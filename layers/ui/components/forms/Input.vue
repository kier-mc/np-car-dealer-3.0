<script setup lang="ts">
import InputField from "./input/InputField.vue";
import InputLabel from "./input/InputLabel.vue";

export interface Props {
  required?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  required: false,
});
const { required } = props;

const id = useId();
</script>

<template>
  <div class="input">
    <InputLabel class="input__label" :for="id" :required>
      <slot />
    </InputLabel>
    <InputField :id="id" class="input__field" v-bind="$attrs" />
  </div>
</template>

<style scoped lang="scss">
.input {
  position: relative;
  display: grid;
  padding-block-start: var(--sz-spacing-sm);

  &__label {
    grid-column: 1;
    grid-row: 1;
    z-index: 5;
  }

  &__field {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>

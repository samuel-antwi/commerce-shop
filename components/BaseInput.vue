<script setup lang="ts">
  defineProps({
    label: {
      type: [String, Boolean],
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    optional: {
      type: String,
      default: "",
    },
  })
</script>

<template>
  <div class="flex flex-col px-0 mb-2 border-0">
    <label class="mb-2" for="modelValue" v-if="label"
      >{{ label }}
      <small v-if="optional" class="text-gray-600">({{ optional }})</small>
    </label>
    <input
      class="border-0 py-2.5"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      v-bind="$attrs"
    />
  </div>
</template>

<style scoped>
  input {
    background: #f6f4f1;
    @apply focus:ring-0 focus:bg-[#eee9e2];
  }

  label {
    @apply font-medium;
  }
</style>

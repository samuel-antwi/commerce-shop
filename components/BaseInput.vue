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
    basic: {
      type: Boolean,
      default: false,
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
      :class="
        basic
          ? 'border bg-white py-3.5'
          : 'border-0 bg-[#f6f4f1] focus:ring-0 focus:bg-[#eee9e2]'
      "
      class="py-2.5"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      v-bind="$attrs"
    />
  </div>
</template>

<style scoped>
  label {
    @apply font-medium;
  }
</style>

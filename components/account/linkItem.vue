<script setup lang="ts">
  defineProps({
    link: {
      type: String,
      default: "",
    },
  })
</script>

<template>
  <NuxtLink
    :to="link"
    class="flex items-center px-3 py-4 text-gray-700 bg-white"
  >
    <slot />
  </NuxtLink>
</template>

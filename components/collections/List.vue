<script setup lang="ts">
  import { MenuItem } from "@headlessui/vue"

  defineProps({
    title: String,
    handle: String,
  })
</script>

<template>
  <NuxtLink :to="`/collections/${handle}`">
    <MenuItem v-slot="{ active }">
      <button
        :class="[
          active ? 'text-blue-500' : 'text-gray-700',
          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
        ]"
      >
        {{ title }}
      </button>
    </MenuItem>
  </NuxtLink>
</template>

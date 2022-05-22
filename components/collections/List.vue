<script setup lang="ts">
  import { MenuItem } from "@headlessui/vue"
  import ChevronRight from "~icons/bi/chevron-right"

  defineProps({
    title: String,
    handle: String,
    id: String,
  })
</script>

<template>
  <NuxtLink :to="`/collections/${id}`">
    <MenuItem v-slot="{ active }">
      <button
        :class="[
          active ? 'text-blue-500' : 'text-gray-700',
          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
        ]"
      >
        {{ title }}
        <span>
          <ChevronRight class="text-[10px]" />
        </span>
      </button>
    </MenuItem>
  </NuxtLink>
</template>

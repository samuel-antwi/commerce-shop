<script setup lang="ts">
  import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/outline"

  defineProps({
    product: Object,
    nextImage: Function,
    previousImage: Function,
  })
</script>

<template>
  <div class="flex items-center justify-between">
    <button
      @click="previousImage(product)"
      class="py-8 border-blue-400 rounded-tr rounded-br pr-14 focus:border-l-0 focus:border-2"
      type="button"
    >
      <ChevronLeftIcon class="w-12 h-12 text-3xl text-gray-600 md:text-4xl" />
    </button>
    <button
      @click="nextImage(product)"
      class="border-blue-400 rounded-tl rounded-bl focus:border-r-0 focus:border-2"
      type="button"
    >
      <ChevronRightIcon class="w-12 h-12 my-8 text-gray-600 ml-14" />
    </button>
  </div>
</template>

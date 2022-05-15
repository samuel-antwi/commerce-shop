<script setup lang="ts">
  import ChevronLeft from "~icons/bi/chevron-left"
  import ChevronRight from "~icons/bi/chevron-right"
  import { product } from "@/data/product"

  const { nextImage, previousImage } = useProductNavigation()
</script>

<template>
  <div class="flex items-center justify-between">
    <button
      @click="previousImage(product)"
      class="py-8 border-blue-400 rounded-tr rounded-br pr-14 focus:border-l-0 focus:border-2"
      type="button"
      aria-label="Previous"
    >
      <ChevronLeft class="text-3xl text-gray-600 md:text-4xl" />
    </button>
    <button
      class="border-blue-400 rounded-tl rounded-bl focus:border-r-0 focus:border-2"
      type="button"
      aria-label="Next"
    >
      <ChevronRight
        @click="nextImage(product)"
        class="my-8 text-3xl text-gray-600 ml-14 md:text-4xl"
      />
    </button>
  </div>
</template>

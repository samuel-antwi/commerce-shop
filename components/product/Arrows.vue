<script setup lang="ts">
  import ChevronLeft from "~icons/mdi/chevron-left"
  import ChevronRight from "~icons/mdi/chevron-right"
  import { product } from "@/data/product"

  const { nextImage, previousImage } = useProductNavigation()
</script>

<template>
  <div class="flex items-center justify-between">
    <button
      class="border-blue-400 rounded focus:border-l-0 focus:border-2"
      type="button"
      aria-label="Previous"
    >
      <ChevronLeft
        @click="previousImage(product)"
        class="text-3xl md:text-6xl"
      />
    </button>
    <button
      class="border-blue-400 rounded focus:border-r-0 focus:border-2"
      type="button"
      aria-label="Next"
    >
      <ChevronRight @click="nextImage(product)" class="text-3xl md:text-6xl" />
    </button>
  </div>
</template>

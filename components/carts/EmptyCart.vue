<script setup lang="ts">
  import { ChevronRightIcon, LockClosedIcon } from "@heroicons/vue/outline"
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl font-bold md:text-4xl">Your cart</h1>
      <div>
        <NuxtLink class="text-[#ae867a] underline flex items-center" to="/"
          >Continue shopping <ChevronRightIcon class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col items-center py-32 border border-gray-300">
      <p class="mb-4 text-gray-600">Your cart is empty</p>
      <NuxtLink
        to="/"
        class="flex items-center transition duration-300 ease-in-out hover:bg-[#ae867a] px-10 py-4 text-gray-200 bg-black"
      >
        <IconCart class="mr-2" />
        <span class="font-semibold tracking-wider uppercase"
          >Continue shopping</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
  import IconChevronRight from "~icons/mdi/chevron-right"
  import { ChevronRightIcon, LockClosedIcon } from "@heroicons/vue/outline"
  import { useMainStore } from "~~/stores/MainStore"
  const emptyCart = ref(false)

  const { cart } = useMainStore()
</script>

<template>
  <div class="flex items-center justify-between mb-10">
    <h1 class="text-xl font-bold md:text-4xl">Your cart</h1>
    <div class="flex items-center">
      <div class="mr-4">
        <h2 class="text-gray-500">Subtotal</h2>
        <p class="text-2xl text-gray-700">£24.00</p>
      </div>
      <button
        class="flex items-center px-10 transition duration-300 ease-in-out hover:bg-[#ae867a] py-4 text-gray-200 bg-black"
      >
        <span class="font-semibold tracking-wider uppercase">Checkout</span>
        <LockClosedIcon class="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
</template>

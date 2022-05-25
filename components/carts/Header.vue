<script setup lang="ts">
  import IconCart from "~icons/mdi/cart-outline"
  import IconChevronRight from "~icons/mdi/chevron-right"
  const emptyCart = ref(false)
</script>

<template>
  <div class="flex items-center justify-between mb-10">
    <h1 class="text-xl font-bold md:text-4xl">Your cart</h1>
    <div v-if="emptyCart">
      <NuxtLink class="text-[#ae867a] underline flex items-center" to="/"
        >Continue shopping <IconChevronRight />
      </NuxtLink>
    </div>
    <div v-else class="flex items-center">
      <div class="mr-4 bg-[#f4f4fb]">
        <h2 class="text-gray-500">Subtotal</h2>
        <p class="text-2xl text-gray-700">£24.00</p>
      </div>
      <button
        class="flex items-center px-10 transition duration-300 ease-in-out hover:bg-[#ae867a] py-4 text-gray-200 bg-black"
      >
        <IconCart class="mr-2" />
        <span class="font-semibold tracking-wider uppercase">Checkout</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconCart from "~icons/mdi/cart-outline"
</script>

<template>
  <div>
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

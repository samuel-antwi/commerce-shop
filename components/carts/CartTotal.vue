<script setup lang="ts">
  import { useMainStore } from "~~/stores/MainStore"

  const { cart } = useMainStore()
</script>

<template>
  <div class="cart-items">
    <p class="text-[12px]">{{ cart.items.length }}</p>
  </div>
</template>

<style scoped>
  .cart-items {
    @apply absolute flex items-center justify-center w-5 h-5 text-gray-100 bg-[#ae867b] rounded-full left-6 -top-2;
  }
</style>

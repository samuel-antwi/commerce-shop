<script setup lang="ts">
  const { isCartEmpty } = useCartStore()
</script>

<template>
  <div v-if="!isCartEmpty" class="cart-items">
    <p class="text-[12px]">6</p>
  </div>
</template>

<style scoped>
  .cart-items {
    @apply absolute flex items-center justify-center w-5 h-5 text-gray-100 bg-gray-500 rounded-full left-6 -top-2;
  }
</style>

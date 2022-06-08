<script setup lang="ts">
  import { useMainStore } from "~~/stores/MainStore"

  const { cart } = useMainStore()
</script>

<template>
  <div class="min-h-screen pt-12 width-wrapper">
    <div v-if="cart.items.length">
      <CartsHeader />
      <CartsFreeShipping />
      <CartsCartItem />
    </div>
    <CartsEmptyCart v-else />
  </div>
</template>

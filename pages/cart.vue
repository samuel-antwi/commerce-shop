<script setup lang="ts">
  const isCartEmpty = ref(true)
</script>

<template>
  <div class="pt-12 width-wrapper">
    <CartsHeader />
    <div v-if="!isCartEmpty">
      <CartsFreeShipping />
      <CartsCartItem />
    </div>
    <CartsEmptyCart v-else />
  </div>
</template>

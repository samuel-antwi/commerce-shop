<script setup lang="ts">
  import "@/assets/css/tailwind.css"
  import { useFetches } from "@/composables/useFetches"

  const { fetchProducts, getProducts } = useFetches()
  const products = await fetchProducts()

  console.log(products.value)
</script>

<template>
  <div class="pt-12 overflow-hidden width-wrapper">
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
      <ProductsList v-for="product in products" :product="product" />
    </div>
  </div>
</template>

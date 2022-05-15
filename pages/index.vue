<script setup lang="ts">
  const { data: products } = await useFetch(
    "http://localhost:9000/store/products"
  )
  console.log(products.value)
</script>

<template>
  <div class="pt-12 width-wrapper-md">
    <div class="grid grid-cols-4 gap-6">
      <ProductsList v-for="product in products.products" :product="product" />
    </div>
  </div>
</template>

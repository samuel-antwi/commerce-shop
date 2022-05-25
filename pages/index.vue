<script setup lang="ts">
  import "@/assets/css/tailwind.css"
  import { client } from "@/utils/client"

  const {
    data: products,
    error,
    pending,
  } = await useAsyncData(`products`, async () => {
    const { products } = await client.products.list()
    return products
  })
</script>

<template>
  <div class="pt-12 overflow-hidden width-wrapper-lg">
    <p v-if="error">{{ error }}</p>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
      <div v-if="pending">
        <span>Loading...</span>
      </div>
      <ProductsList v-else v-for="product in products" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import "@/assets/css/tailwind.css"
  const { $medusa } = useNuxtApp()
  const errorMsg = ref("Sorry, can't fetch products")

  const {
    data: products,
    error,
    pending,
  } = await useAsyncData(`products`, async () => {
    const { products } = await $medusa.products.list()
    return products
  })

  // const store = useStore()

  // const regions = await store.getRegions()

  console.log(products.value)
</script>

<template>
  <div class="min-h-screen pt-12 overflow-hidden width-wrapper-lg">
    <p class="text-center" v-if="error">{{ errorMsg }}</p>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
      <ProductsList
        v-for="product in products"
        :product="product"
        :pending="pending"
      />
    </div>
  </div>
</template>

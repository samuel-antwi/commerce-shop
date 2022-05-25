<script setup lang="ts">
  import { client } from "@/utils/client"
  const route = useRoute()

  const id = route.params.id

  const { data: products } = await useAsyncData(
    `collection-${id}`,
    async () => {
      const { products } = await client.products.list({
        collection_id: [id],
      })
      return products
    }
  )
</script>

<template>
  <div class="pt-10 width-wrapper-md">
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
      <ProductsList v-for="product in products" :product="product" />
    </div>
  </div>
</template>

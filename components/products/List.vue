<script setup lang="ts">
  const props = defineProps({
    product: Object,
  })

  const { product } = toRefs(props)
</script>

<template>
  <NuxtLink :to="`/product/${product.handle}`">
    <img class="mb-3" :src="product.thumbnail" :alt="product.name" />
    <div class="text-center">
      <p class="text-sm text-gray-600">{{ product.title }}</p>
    </div>
  </NuxtLink>
</template>

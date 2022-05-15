<script setup lang="ts">
  defineProps({
    product: Object,
  })
</script>

<template>
  <NuxtLink :to="`/product/${product.handle}`">
    <img class="mb-3" :src="product.thumbnail" :alt="product.name" />
    <div class="text-center">
      <p class="text-sm text-gray-600">{{ product.title }}</p>
      <!-- <p>£{{ product.price }}</p>
          <p v-if="product.color">{{ product.color }}</p> -->
    </div>
  </NuxtLink>
</template>

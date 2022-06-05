<script setup lang="ts">
  const props = defineProps({
    product: Object,
    pending: {
      type: Boolean,
    },
  })

  const { product } = toRefs(props)
</script>

<template>
  <div>
    <div v-if="pending">
      <img
        width="294"
        height="360"
        src="@/assets/images/products/backpack/backpack-01-black.webp"
        alt="Backpack"
      />
    </div>
    <NuxtLink v-else :to="`/product/${product.handle}`">
      <img
        class="mb-3"
        width="294"
        height="360"
        :src="product.thumbnail"
        :alt="product.name"
      />
      <div>
        <p class="text-sm text-gray-600">{{ product.title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

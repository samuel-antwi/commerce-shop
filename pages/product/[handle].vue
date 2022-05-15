<script setup lang="ts">
  const { index, getProductImageInView, imgSrc } = useProductNavigation()

  const route = useRoute()
  const productHandle = route.params.handle

  const { data } = await useFetch(
    `http://localhost:9000/store/products?&handle=${productHandle}`
  )

  const product = data.value.products[0]
  console.log(product)
</script>

<template>
  <div class="pt-10 width-wrapper-md">
    <div class="grid grid-cols-12 md:gap-8">
      <div class="flex-col hidden col-span-1 md:flex">
        <img
          v-for="imgSrc in product.images"
          :key="imgSrc.id"
          class="object-contain mb-3 cursor-pointer w-18 h-18"
          :src="imgSrc.url"
          alt="Backpack"
        />
      </div>
      <div class="col-span-12 md:col-span-6">
        <div class="relative">
          <img :src="product.thumbnail" :alt="product.title" />
          <ProductArrows class="absolute inset-y-0 w-full text-gray-700" />
        </div>
      </div>
      <div class="col-span-12 pt-8 md:col-span-5 md:pt-0">
        <div class="mb-5">
          <h1 class="text-4xl text-gray-600">{{ product.title }}</h1>
          <!-- <p class="py-3 text-gray-500">{{ product.color }}</p> -->
          <h2 class="mb-10 text-3xl text-gray-600">£{{ product.price }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <hr class="mb-10" />
        <div class="grid grid-cols-12 gap-5">
          <ProductAddToBasketButton class="col-span-10" />
          <ProductAddToWishListButton class="col-span-2" />
        </div>
        <ProductDeliveryAndReturnBox />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .current-image {
    width: 100%;
    height: 100%;
  }
</style>

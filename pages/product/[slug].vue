<script setup lang="ts">
  import { product } from "@/data/product"

  const { index, getProductImageInView, imgSrc } = useProductNavigation()
</script>

<template>
  <div class="pt-10 width-wrapper-md">
    <div class="grid grid-cols-12 gap-8">
      <div class="flex flex-col col-span-1">
        <img
          @click="getProductImageInView(product, imgSrc)"
          v-for="imgSrc in product.assets"
          class="object-contain mb-3 cursor-pointer w-18 h-18"
          :src="imgSrc.name"
          alt="Backpack"
        />
      </div>
      <div class="relative col-span-10 md:col-span-6">
        <div class="w-full h-full">
          <img
            class="w-fit h-fit"
            :src="imgSrc ? imgSrc : product.assets[index].name"
            :alt="product.name"
          />
        </div>
        <ProductArrows class="absolute inset-y-0 w-full text-gray-700" />
      </div>
      <div class="col-span-12 md:col-span-5">
        <div class="mb-5">
          <h1 class="text-4xl text-gray-600">{{ product.name }}</h1>
          <p class="py-3 text-gray-500">{{ product.color }}</p>
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

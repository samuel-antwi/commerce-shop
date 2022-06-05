<script setup lang="ts">
  // Index of product images to
  //determine which image to show
  const index = ref(0)
  const route = useRoute()
  const { $medusa } = useNuxtApp()

  // Get product slug
  const slug = route.params.slug

  const { data: product } = await useAsyncData(`product-${slug}`, async () => {
    const { products } = await $medusa.products.list({
      limit: 1,
      handle: slug,
    })
    return products[0]
  })

  // Next Image
  const nextImage = (product) => {
    const lastItem = product.images.length - 1
    if (lastItem === index.value) {
      index.value = 0
    } else {
      index.value++
    }
  }

  // Previous image
  const previousImage = (product) => {
    const lastItem = product.images.length - 1
    if (index.value === 0) {
      index.value = lastItem
    } else {
      index.value--
    }
  }

  // Change product image in view when clicked.
  const getImage = (itemIndex: number) => {
    index.value = itemIndex
  }
</script>

<template>
  <div class="py-12 width-wrapper-md">
    <div class="grid grid-cols-12 md:gap-8">
      <div class="flex-col hidden col-span-1 md:flex">
        <img
          @click="getImage(i)"
          v-for="(imgUrl, i) in product.images"
          :key="imgUrl.id"
          :class="i === index ? 'border-2 rounded border-blue-300' : ''"
          class="object-contain mb-3 cursor-pointer w-18 h-18"
          :src="imgUrl.url"
          alt="Backpack"
        />
      </div>
      <div class="col-span-12 md:col-span-6">
        <div class="relative">
          <img :src="product.images[index].url" :alt="product.title" />
          <ProductArrows
            v-if="product.images.length > 1"
            :product="product"
            :nextImage="nextImage"
            :previousImage="previousImage"
            class="absolute inset-y-0 w-full text-gray-700"
          />
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

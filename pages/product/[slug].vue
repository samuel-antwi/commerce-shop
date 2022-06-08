<script setup lang="ts">
  import { Product } from "@medusajs/medusa"
  // Index of product images to
  //determine which image to show
  const index = ref(0)
  const route = useRoute()
  const { $medusa } = useNuxtApp()

  // Get product slug
  const slug: string = route.params.slug as string

  // Get product details
  const { data: product, pending } = await useAsyncData(
    `product-${slug}`,
    async () => {
      const { products } = await $medusa.products.list({
        limit: 1,
        handle: slug,
      })
      return products[0]
    }
  )

  if (!product.value) {
    useCustomError({
      statusCode: 404,
      statusMessage: "Product not found",
    })
  }

  const { fetchCollections } = useFetches()

  const collections = await fetchCollections()

  const { filters: _filters } = useFilters({
    products: [product.value as Product],
    collections: collections.value,
  })

  const filters = computed(() =>
    _filters.value.filter(({ name }) => name !== "Collection")
  )

  const selectedOptions = ref(
    Object.fromEntries(
      filters.value.map(({ name, options }) => [name, options[0].value])
    )
  )

  const variant = computed(() => {
    return product.value.variants.find((variant) => {
      return variant.options.every(
        (option) =>
          option.value ===
          selectedOptions.value[
            filters.value.find((filter) =>
              filter.options.map((o) => o.value).includes(option.value)
            ).name
          ]
      )
    })
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

  const { formatPrice } = usePrices()

  const price = computed(() => formatPrice(variant.value))
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
          <h1 class="text-gray-600">{{ product.title }}</h1>
          <h2 class="py-5 text-xl font-semibold tracking-wider text-gray-600">
            {{ price }}
          </h2>
          <h2 class="text-sm text-gray-800 uppercase">Color:</h2>
          <!-- <p>{{ product.description }}</p> -->
        </div>
        <ProductSizeSelector :variants="product.variants" />
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

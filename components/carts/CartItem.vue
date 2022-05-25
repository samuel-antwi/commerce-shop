<script setup lang="ts">
  import IconClose from "~icons/mdi/close"
  const quantity = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
  ]

  const selectedQty = ref(quantity[0])
</script>

<template>
  <div class="grid items-center grid-cols-5 gap-10 mt-8">
    <div class="col-span-3">
      <div class="flex items-center">
        <img
          class="w-40 h-40 mr-2"
          src="@/assets/images/products/backpack/backpack-01-black.webp"
          alt=""
        />
        <span>
          <h2 class="text-lg">Companion Makeup Bag</h2>
          <p class="text-gray-500">Price: £28.00</p>
        </span>
      </div>
    </div>
    <div class="w-10/12 col-span-1">
      <div class="relative">
        <p class="absolute pr-1 text-gray-600 bg-white -top-3 left-3">
          Quantity
        </p>
        <select
          class="block w-full py-4 focus:border-gray-600 focus:ring-0"
          v-model="selectedQty"
        >
          <option v-for="qty in quantity" :key="qty.number" :value="qty">
            {{ qty.number }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-span-1">
      <div class="flex items-center justify-between">
        <p class="text-lg">£84.00</p>
        <button
          type="button"
          aria-label="remove product"
          class="flex items-center justify-center w-6 h-6 font-semibold bg-gray-200 rounded-full hover:bg-black hover:text-gray-200"
        >
          <IconClose />
        </button>
      </div>
    </div>
  </div>
  <hr class="mt-5" />
</template>

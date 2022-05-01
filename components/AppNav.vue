<script setup lang="ts">
  import IconMagnify from "~icons/mdi/magnify"
  import IconAccountOutline from "~icons/mdi/account-outline"
  import IconBasketOutline from "~icons/mdi/basket-outline"

  const { search, showSearchProducts } = useSearchProduct()
</script>

<template>
  <nav class="shadow-md py-5">
    <div class="width-wrapper">
      <div v-if="search" class="">
        <SearchProduct class="text-2xl" />
      </div>
      <div v-else class="flex items-center justify-between">
        <NuxtLink to="/">
          <h1>Home</h1>
        </NuxtLink>
        <div class="flex text-2xl items-center justify-between space-x-7">
          <button @click="showSearchProducts">
            <IconMagnify />
          </button>
          <NuxtLink to="/accounts">
            <IconAccountOutline />
          </NuxtLink>
          <NuxtLink to="/cart">
            <IconBasketOutline />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .nav-wrapper {
    @apply flex max-w-5xl mx-auto items-center justify-between;
  }
</style>

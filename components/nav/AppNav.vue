<script setup lang="ts">
  import IconMagnify from "~icons/mdi/magnify"
  import IconAccountOutline from "~icons/mdi/account-outline"
  import IconBasketOutline from "~icons/mdi/basket-outline"
  import CollectionDropdown from "./CollectionDropdown.vue"

  const { search, showSearchProducts } = useSearchProduct()
</script>

<template>
  <nav class="py-5 shadow-md">
    <div class="width-wrapper-lg">
      <div v-if="search" class="">
        <NavSearchProduct class="text-2xl" />
      </div>
      <div v-else class="flex items-center justify-between">
        <div>
          <NavAppLogo />
        </div>
        <div>
          <CollectionDropdown />
          <!-- <NuxtLink to="/collections">Collections</NuxtLink> -->
        </div>
        <div
          class="items-center justify-between hidden text-2xl md:flex space-x-7"
        >
          <button @click="showSearchProducts">
            <IconMagnify />
          </button>
          <NuxtLink to="/accounts">
            <IconAccountOutline />
          </NuxtLink>
          <NuxtLink to="/cart">
            <IconBasketOutline />
          </NuxtLink>
          <NuxtLink class="text-lg" to="/login"> Login </NuxtLink>
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

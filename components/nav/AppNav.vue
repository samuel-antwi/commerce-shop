<script setup lang="ts">
  import IconMagnify from "~icons/mdi/magnify"
  import IconAccountOutline from "~icons/mdi/account-outline"
  import IconBasketOutline from "~icons/mdi/basket-outline"
  import CollectionDropdown from "./CollectionDropdown.vue"
  import IconHeart from "~icons/mdi/cards-heart-outline"

  const { logOut } = useAuth()

  const handleLogout = () => {
    logOut()
  }

  const { search, showSearchProducts } = useSearchProduct()
</script>

<template>
  <div class="sticky top-0 z-50 bg-white">
    <nav class="py-5 shadow-md st">
      <div class="width-wrapper-lg">
        <div v-if="search" class="">
          <NavSearchProduct class="text-2xl" />
        </div>
        <div v-else class="flex items-center justify-between">
          <div>
            <NavAppLogo />
          </div>
          <CollectionDropdown class="hidden md:block" />
          <div
            class="items-center justify-between hidden text-2xl md:flex space-x-7"
          >
            <button @click="showSearchProducts">
              <IconMagnify />
            </button>
            <NuxtLink to="/accounts">
              <IconAccountOutline />
            </NuxtLink>
            <NuxtLink to="/saved-lists">
              <IconHeart />
            </NuxtLink>
            <NuxtLink class="relative" to="/cart">
              <CartsCartTotal />
              <IconBasketOutline />
            </NuxtLink>

            <!-- <button @click="handleLogout" class="text-lg" to="/login">
              Logout
            </button> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .nav-wrapper {
    @apply flex max-w-5xl mx-auto items-center justify-between;
  }
</style>

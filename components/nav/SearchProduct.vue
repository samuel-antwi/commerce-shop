<script setup lang="ts">
  import { SearchIcon, XIcon } from "@heroicons/vue/outline"
  const query = ref("")

  const router = useRouter()

  const { searchProducts } = useSearchProduct()

  // A function to search for product
  const handleSearchProducts = async () => {
    await searchProducts(query.value)
    router.push(`/search/?q=${query.value}`)
    query.value = ""
  }
</script>

<template>
  <div class="relative w-1/2 mx-auto">
    <form @submit.prevent="handleSearchProducts">
      <input
        v-model="query"
        class="w-full py-3 rounded-md focus:ring-0 focus:border-blue-400"
        type="text"
      />
      <div
        :class="query ? 'top-[5px]' : 'inset-center'"
        class="absolute right-2"
      >
        <div class="flex items-center justify-end">
          <XIcon
            @click="query = ''"
            v-if="query"
            class="w-6 h-6 mr-3 text-gray-600 cursor-pointer"
          />
          <button
            :disabled="!query"
            type="submit"
            :class="
              query
                ? 'bg-blue-500 transition duration-300 ease-in-out w-10 h-10 flex items-center justify-center rounded-full text-gray-100'
                : 'text-gray-600'
            "
          >
            <SearchIcon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .inset-center {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

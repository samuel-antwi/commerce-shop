import { ProductCollection } from "@medusajs/medusa"
import { defineStore } from "pinia"
import { client } from "@/utils/client"

export const useProductsStore = defineStore("ProductsStore", () => {
  const products = ref([])
  const collections = ref([])
  const collectionList = ref([])
  const isLoading = ref(false)

  const getProducts = async () => {
    isLoading.value = true
    try {
      const { products: data } = await client.products.list()
      products.value = data
      isLoading.value = false
    } catch (error) {
      console.log(error)
      isLoading.value = false
    }
  }

  const getCollections = async (id) => {
    const { products } = await client.products.list({
      collection_id: [id],
    })
    collections.value = products
  }

  const getCollectionList = async () => {
    const { collections } = await client.collections.list()
    collectionList.value = collections
  }

  return {
    isLoading,
    getProducts,
    products,
    getCollections,
    collections,
    getCollectionList,
    collectionList,
  }
})

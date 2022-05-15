import { defineStore } from "pinia"
import { Products } from "@/types/products"

export const useProductsStore = defineStore("productsStore", () => {
  const products = ref<Products[]>([])
  const name = ref("Samuel")

  const getProducts = async () => {
    const data = await $fetch("/api/products")
    products.value = data
  }

  return { products, getProducts, name }
})

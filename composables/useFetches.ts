import { client } from "@/utils/client"

export const useFetches = () => {
  const getProducts = async () => {
    const { products: data } = await client.products.list()
    return data
  }

  // Fetch all products
  const fetchProducts = async () =>
    (
      await useAsyncData("products", async () => {
        const { products } = await client.products.list()
        return products
      })
    ).data

  // Fetch Collections
  const fetchCollections = async () =>
    (
      await useAsyncData("collections", async () => {
        const { collections } = await client.collections.list()
        return collections
      })
    ).data

  const fetchProductsOverview = async () =>
    await useAsyncData("products-overview", async () => {
      const { products } = await client.products.list({ limit: 4 })
      return products
    }).data

  const fetchCollectionsOverview = async () =>
    (
      await useAsyncData("collections-overview", async () => {
        const { collections } = await client.collections.list({
          limit: 3,
        })
        return collections
      })
    ).data

  return {
    getProducts,
    fetchProducts,
    fetchCollections,
    fetchProductsOverview,
    fetchCollectionsOverview,
  }
}

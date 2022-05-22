import { defineStore } from "pinia"
import { Cart, Region } from "@medusajs/medusa"
import { client } from "@/utils/client"

export const useCartStore = defineStore("cartStore", () => {
  const cartItems = ref<Partial<Cart>>()

  const isCartEmpty = computed(() => {
    return cartItems.value === "undefined"
  })

  const createCart = async () => {
    const { cart } = await client.carts.create({})
    console.log(cart)
    cartItems.value = cart
  }

  return { cartItems, isCartEmpty, createCart }
})

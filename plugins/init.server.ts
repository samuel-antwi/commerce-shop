import { defineNuxtPlugin } from "#app"

import { useUserStore } from "@/stores/userStore"
import { useCartStore } from "@/stores/CartStore"

export default defineNuxtPlugin(async (nuxtApp) => {
  //   const cartStore = useCartStore(nuxtApp.$pinia)
  //   const userStore = useUserStore(nuxtApp.$pinia)
  //   await userStore.getUser()
  // await cartStore.createCart()
})

import { defineStore } from "pinia"

import { client } from "@/utils/client"
import { Customer } from "@medusajs/medusa"

export const useUserStore = defineStore("user", () => {
  const user = ref<Customer>(null)

  const getUser = async () => {
    const { customer } = await client.auth.getSession()
    user.value = customer
    console.log(user.value)
  }

  return { user, getUser }
})

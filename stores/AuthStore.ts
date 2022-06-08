import { Customer } from "@medusajs/medusa"
import { defineStore } from "pinia"

export const useAuthStore = defineStore("AuthStore", () => {
  const { $medusa } = useNuxtApp()
  const customer = useCookie<Customer>("user")
  const signup = async (user) => {
    try {
      const { customer: data } = await $medusa.customers.create({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        phone: user.phone,
      })
      customer.value = customer.value || data
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async (user) => {
    try {
      const { customer: data } = await $medusa.auth.authenticate({
        email: user.email,
        password: user.password,
      })
      customer.value = customer.value || data
    } catch (error) {
      console.log(error)
    }
  }

  return { login, signup, customer }
})

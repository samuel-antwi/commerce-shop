import { client } from "@/utils/client"
import { User, Customer } from "@medusajs/medusa"
import { defineStore } from "pinia"

export const useAuthStore = defineStore("AuthStore", () => {
  const signup = async (user) => {
    try {
      await client.customers.create({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        phone: user.phone,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async (user) => {
    try {
      await client.auth.authenticate({
        email: user.email,
        password: user.password,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { login, signup }
})

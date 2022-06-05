import { useAuthStore } from "../stores/AuthStore"
export default defineNuxtRouteMiddleware(() => {
  const { customer } = useAuthStore()

  if (!customer) {
    return navigateTo("/login")
  }
})

export default defineNuxtRouteMiddleware(() => {
  const { user } = useUser()

  if (Object.entries(user.value).length === 0) {
    return navigateTo("/login")
  }
})

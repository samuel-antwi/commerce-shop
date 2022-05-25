<script setup lang="ts">
  import "@/assets/css/tailwind.css"
  import { client } from "@/utils/client"
  const router = useRouter()

  const { user } = useUser()

  const getUser = async () => {
    try {
      const { customer } = await client.auth.getSession()
      user.value = customer
    } catch (error) {
      console.log(error)
    }
  }
  onMounted(() => {
    getUser()
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import "@/assets/css/tailwind.css"
  import { useMainStore } from "./stores/MainStore"

  const store = useMainStore()
  const { initialize } = store

  await useAsyncData("init-medusa", async () => {
    await initialize()
  })

  const { cart } = useMainStore()

  console.log(cart)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

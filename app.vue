<script setup lang="ts">
  import "@/assets/css/tailwind.css"

  const { getUser, user } = useUser()

  await getUser()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

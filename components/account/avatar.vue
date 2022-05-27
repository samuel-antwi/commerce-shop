<script setup lang="ts">
  const { user } = useUser()
  const newUser = { ...user.value }
</script>

<template>
  <div class="flex items-center py-10 mb-2 bg-white">
    <div class="initials">
      <span>{{ newUser.first_name.charAt(0) }}</span>
      <span>{{ newUser.last_name.charAt(0) }}</span>
    </div>
    <div class="ml-2">
      <h1 class="text-lg text-gray-800">Hi,</h1>
      <p class="text-lg font-semibold tracking-wider text-gray-800 uppercase">
        <span class="mr-1">{{ newUser.first_name }}</span>
        <span>{{ newUser.last_name }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .initials {
    @apply w-24 h-24 font-bold text-4xl -ml-3 flex items-center justify-center rounded-full bg-black text-gray-200;
  }
</style>

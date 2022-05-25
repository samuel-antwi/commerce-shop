<script setup lang="ts">
  const { user } = useUser()
</script>

<template>
  <div>
    <h1>{{ user?.first_name }}</h1>
  </div>
</template>

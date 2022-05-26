<script setup lang="ts">
  definePageMeta({
    layout: "account",
  })
</script>

<template>
  <div class="min-h-screen bg-[#eeeeee]">
    <div class="grid max-w-5xl grid-cols-3 px-4 pt-12 mx-auto">
      <div class="col-span-1">
        <AccountSidenav />
      </div>
    </div>
  </div>
</template>

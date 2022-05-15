<script setup lang="ts">
  import IconTruck from "~icons/mdi/truck-outline"
  import IconReturn from "~icons/mdi/cash-refund"
</script>

<template>
  <div class="w-full p-4 border md:w-8/12">
    <span class="flex items-center mb-3 text-gray-600">
      <IconTruck class="mr-3 text-2xl" />
      <p class="text-sm">Free Delivery.</p>
    </span>
    <span class="flex items-center text-gray-600">
      <IconReturn class="mr-3 text-2xl" />
      <p class="text-sm">Free Returns.</p>
    </span>
    <span class="block pt-4 text-sm text-center text-gray-600"
      >Ts&amp;Cs apply-
      <NuxtLink class="underline" to="/">Learn more</NuxtLink>
    </span>
  </div>
</template>

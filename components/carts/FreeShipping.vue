<script setup lang="ts">
  const freeSippingQuota = ref(50)
  const cartTotal = ref(51)

  const getFreeShippingDifference = computed(() => {
    return (freeSippingQuota.value - cartTotal.value).toFixed(2)
  })

  const isFreeShipping = computed(() => {
    return cartTotal.value >= freeSippingQuota.value
  })
</script>

<template>
  <div class="w-full py-6 mt-16 text-center border border-black">
    <span v-if="isFreeShipping">
      <p class="mb-3 text-2xl text-gray-600">
        You're <span class="text-[#60ac47]">eligible </span> for *Free Shipping!
      </p>
    </span>
    <span v-else>
      <p class="mb-3 text-2xl text-gray-600">
        You're
        <span class="text-[#60ac47]"
          >£ {{ getFreeShippingDifference }} GBP </span
        >away from *Free Shipping!
      </p>
    </span>
    <p class="text-gray-500">(Eligible for only UK customers)</p>
  </div>
</template>

<style scoped></style>

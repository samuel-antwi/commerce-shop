<script setup lang="ts">
  const { closeSearchProducts } = useSearchProduct()
</script>

<template>
  <div>
    <UtilityBar />
    <AppNav />
    <div @click="closeSearchProducts" class="min-h-screen">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

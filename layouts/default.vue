<script setup lang="ts">
  const { closeSearchProducts } = useSearchProduct()
</script>

<template>
  <div>
    <UtilityBar />
    <NavAppNav />
    <div @click="closeSearchProducts" class="min-h-screen">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  const { closeSearchProducts } = useSearchProduct()
</script>

<template>
  <div>
    <UtilityBar />
    <NavAppNav />
    <main @click="closeSearchProducts">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

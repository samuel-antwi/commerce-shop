<script setup lang="ts">
  const { closeSearchProducts } = useSearchProduct()
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <NavAppLogo />
      <h1>My Account</h1>
    </div>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

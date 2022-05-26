<script setup lang="ts"></script>

<template>
  <div>
    <div class="shadow-md">
      <div
        class="flex items-center justify-between max-w-4xl px-4 py-4 mx-auto"
      >
        <NavAppLogo />
        <h1 class="text-3xl font-bold tracking-wider uppercase">My Account</h1>
      </div>
    </div>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import IconMagnify from "~icons/mdi/magnify"
</script>

<template>
  <div class="relative w-1/2 mx-auto">
    <input class="w-full py-3 rounded-md" type="text" />
    <IconMagnify class="inset-center right-2" />
  </div>
</template>

<style scoped>
  .inset-center {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

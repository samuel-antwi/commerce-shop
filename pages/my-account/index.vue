<script setup>
  definePageMeta({
    layout: "account",
  })
</script>

<template>
  <div class="min-h-screen bg-[#eeeeee]">
    <div class="max-w-5xl grid-cols-3 gap-8 px-4 pt-12 mx-auto md:grid">
      <div class="col-span-1">
        <AccountSidenav />
      </div>
      <div class="hidden col-span-2 bg-white md:block">
        <img
          width="650"
          height="830"
          src="@/assets/images/login-img.jpeg"
          alt="A celebrity wearing showcasing her dress"
        />
      </div>
    </div>
  </div>
</template>

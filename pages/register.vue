<script setup lang="ts">
  definePageMeta({
    layout: false,
  })
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="register"></div>
    <div class="flex items-center justify-center w-9/12 px-4 mx-auto">
      <form class="flex flex-col w-full">
        <NavAppLogo />
        <h1 class="pt-12 mb-5 text-5xl">Create Account</h1>
        <label class="flex flex-col mb-4">
          <span class="mb-2">First Name</span>
          <input class="border-0 py-2.5" type="text" />
        </label>
        <label class="flex flex-col mb-4">
          <span class="mb-2">Last Name</span>
          <input class="border-0 py-2.5" type="text" />
        </label>
        <label class="flex flex-col mb-4">
          <span class="mb-2">Email</span>
          <input class="border-0 py-2.5" type="text" />
        </label>
        <label class="flex flex-col mb-6">
          <span class="mb-2">Password</span>
          <input class="border-0 py-2.5" type="password" />
        </label>
        <button type="submit" class="btn-n">Create Account</button>
        <div class="text-[0.9rem] text-gray-500">
          <span class="block">Have an account with us?</span>
          <NuxtLink to="/login">Click here to log in.</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .btn-n {
    @apply border-gray-600 mb-6 transition-all duration-300 ease-in-out border py-2.5 hover:bg-[black] hover:text-gray-50 font-semibold;
  }

  input {
    background: #f6f4f1;
    @apply focus:ring-0 focus:bg-[#eee9e2];
  }

  label {
    @apply font-medium;
  }

  .register {
    background-image: url("@/assets/images/login-img.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
</style>

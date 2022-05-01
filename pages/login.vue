<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-2">
    <div class="login"></div>
    <div class="w-9/12 mx-auto px-4 flex justify-center items-center">
      <form class="w-full flex flex-col">
        <h1 class="text-5xl mb-5">Login</h1>
        <label class="flex flex-col mb-4">
          <span class="mb-2">Email</span>
          <input class="border-0 py-2.5" type="text" />
        </label>
        <label class="flex flex-col mb-6">
          <span class="mb-2">Password</span>
          <input class="border-0 py-2.5" type="password" />
        </label>
        <button type="submit" class="btn-n">Login</button>

        <div class="flex justify-between text-[0.9rem] text-gray-500">
          <div>
            <span class="block">Don't have an account with us?</span>
            <NuxtLink to="/register">Click here to sign up.</NuxtLink>
          </div>
          <NuxtLink class="block" to="/account/forgot"
            >Forgot your password?</NuxtLink
          >
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

  .login {
    background-image: url("@/assets/images/login-img.jpeg");
    background-repeat: no-repeat;
    background-position: 40% 1%;
    width: 100%;
    height: 100vh;
  }
</style>

<script setup lang="ts">
  import AppLogo from "~~/components/nav/AppLogo.vue"
  definePageMeta({
    layout: false,
  })

  const email = ref("")
  const errorMsg = ref("")

  const handleLogin = async () => {
    console.log("Email")
  }
</script>

<template>
  <div class="min-h-screen px-4 bg-[#EEEEEE] pt-32">
    <AppLogo class="mb-8 text-center" />
    <div class="max-w-2xl p-8 mx-auto bg-white dark:bg-at-dark-secondary">
      <div class="flex justify-between">
        <NuxtLink
          to="/login"
          class="font-semibold tracking-wider uppercase border-b-4"
        >
          Sign in
        </NuxtLink>
        <div class="border-r-4"></div>
        <NuxtLink
          to="/register"
          class="font-semibold tracking-wider uppercase border-b-4"
        >
          Register
        </NuxtLink>
      </div>
      <div class="pt-12">
        <h1
          class="mb-6 text-xl font-semibold tracking-wider text-center uppercase"
        >
          Reset your password
        </h1>
        <p class="text-gray-600">
          Type in your email address below and we'll send you an email with
          instructions on how to create a new password
        </p>
      </div>
      <div class="pt-10 md:px-10">
        <div v-if="errorMsg" class="py-3 mb-4 bg-gray-100">
          <p class="text-center text-red-500">
            {{ errorMsg }}
          </p>
        </div>
        <form class="w-10/12 mx-auto md:w-10/12" @submit.prevent="handleLogin">
          <div class="flex flex-col mb-6">
            <label
              class="mb-3 font-semibold tracking-wider text-gray-500 uppercase"
              for="email"
              >Email address:</label
            >
            <input
              v-model="email"
              class="py-3 dark:bg-at-dark-secondary"
              type="text"
            />
          </div>
          <button
            class="w-full py-3 mt-5 font-semibold tracking-widest uppercase bg-black hover:bg-gray-700 text-gray-50 dark:text-gray-300"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  input[type="password"] {
    letter-spacing: 0.3em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;
    color: #374151;
  }
</style>

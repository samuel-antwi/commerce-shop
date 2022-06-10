<script setup lang="ts">
  import AppLogo from "~~/components/nav/AppLogo.vue"
  definePageMeta({
    layout: false,
  })

  const { $medusa } = useNuxtApp()

  const password1 = ref("")
  const password2 = ref("")
  const email = ref("")
  const errorMsg = ref("")

  const showPassword1 = ref(false)
  const showPassword2 = ref(false)

  const handlePasswordReset = async () => {
    if (password1.value !== password2.value) {
      errorMsg.value = "Oops, These passwords don't match"
    } else {
      await $medusa.customers.resetPassword({ email: email.value })
    }
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
      </div>
      <div class="pt-10 md:px-10">
        <form
          class="w-10/12 mx-auto md:w-10/12"
          @submit.prevent="handlePasswordReset"
        >
          <div
            v-if="(errorMsg && password1) || password2"
            class="py-3 mb-6 bg-gray-100"
          >
            <p class="text-center text-red-500">
              {{ errorMsg }}
            </p>
          </div>
          <div class="flex flex-col mb-6">
            <label
              class="mb-3 font-semibold tracking-wider text-gray-500 uppercase"
              for="password1"
              >Password:</label
            >
            <div class="relative">
              <input
                required
                v-model="password1"
                class="w-full py-3 focus:ring-slate-400 dark:bg-at-dark-secondary"
                :type="showPassword1 ? 'text' : 'password'"
              />
              <div
                class="absolute inset-y-0 right-0 py-3 pr-3 border-transparent border-y"
              >
                <button
                  v-if="password1"
                  @click="showPassword1 = showPassword1 = !showPassword1"
                  type="button"
                  class="text-sm font-semibold tracking-widest uppercase"
                >
                  {{ showPassword1 ? "Hide" : "Show" }}
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              class="mb-3 font-semibold tracking-wider text-gray-500 uppercase"
              for="password2"
              >Confirm Password:</label
            >
            <div class="relative">
              <input
                required
                v-model="password2"
                :class="errorMsg ? 'border border-red-500' : ''"
                class="w-full py-3 focus:ring-slate-400 dark:bg-at-dark-secondary"
                :type="showPassword2 ? 'text' : 'password'"
              />
              <div
                class="absolute inset-y-0 right-0 py-3 pr-3 border-transparent border-y"
              >
                <button
                  v-if="password2"
                  @click="showPassword2 = showPassword2 = !showPassword2"
                  type="button"
                  class="text-sm font-semibold tracking-widest uppercase"
                >
                  {{ showPassword2 ? "Hide" : "Show" }}
                </button>
              </div>
            </div>
          </div>
          <button
            class="w-full py-3 mt-5 font-semibold tracking-widest uppercase transition duration-300 ease-in-out bg-black hover:opacity-60 text-gray-50 dark:text-gray-300"
          >
            Finish
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

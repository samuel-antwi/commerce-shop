<script setup lang="ts">
  import AppLogo from "~~/components/nav/AppLogo.vue"
  definePageMeta({
    layout: false,
  })

  const { $medusa } = useNuxtApp()

  const { brandName } = useBrandName()

  const email = ref("")
  const errorMsg = ref("")

  const handlePasswordReset = async () => {
    await $medusa.customers.generatePasswordToken({
      email: email.value,
    })
  }
</script>

<template>
  <div class="min-h-screen px-4 bg-[#EEEEEE] md:pt-32 pt-12">
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
          class="mb-6 text-lg font-semibold tracking-wider text-center uppercase"
        >
          RESET PASSWORD LINK SENT
        </h1>
        <div
          class="flex flex-col w-full mx-auto space-y-4 text-sm text-gray-600 md:w-10/12"
        >
          <p class="">We've sent you an email to reset your password</p>
          <p>
            To create your new password, click the link in the email and enter a
            new one - easy
          </p>
          <p>
            Didn't receive the email? Check your junk email, any other email
            addresses linked to your
            <span class="font-semibold uppercase">{{ brandName }}</span>
            account, or click below to resend the email
          </p>
        </div>
      </div>
      <div class="pt-10 md:px-10">
        <div v-if="errorMsg" class="py-3 mb-4 bg-gray-100">
          <p class="text-center text-red-500">
            {{ errorMsg }}
          </p>
        </div>
        <form
          class="w-full mx-auto md:w-10/12"
          @submit.prevent="handlePasswordReset"
        >
          <div class="items-center md:space-x-4 md:flex">
            <button class="mb-4 reset-btn md:mb-0">Resend email</button>
            <button class="reset-btn">
              <NuxtLink to="/login"> Sign in </NuxtLink>
            </button>
          </div>
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

  .reset-btn {
    @apply w-full py-3 font-semibold tracking-widest uppercase border-2 border-gray-300 hover:text-gray-500 transition duration-200 ease-in-out;
  }
</style>

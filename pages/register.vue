<script setup lang="ts">
  import { useAuthStore } from "~~/stores/AuthStore"

  definePageMeta({
    layout: false,
  })

  const router = useRouter()

  const user = reactive({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    phone: "",
  })

  const { signup, customer } = useAuthStore()

  const handleSignup = async () => {
    await signup(user)
    if (customer) {
      router.push("/")
    }
  }
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="register"></div>
    <div class="flex items-center justify-center w-9/12 px-4 mx-auto">
      <form @submit.prevent="handleSignup" class="flex flex-col w-full">
        <NavAppLogo />
        <h1 class="pt-12 mb-5 text-3xl md:text-4xl">Create Account</h1>
        <BaseInput v-model="user.first_name" type="text" label="First Name" />
        <BaseInput v-model="user.last_name" type="text" label="Last Name" />
        <BaseInput
          v-model="user.phone"
          type="text"
          label="Phone"
          optional="Optional"
        />
        <BaseInput v-model="user.email" type="email" label="Email" />
        <BaseInput v-model="user.password" type="password" label="Password" />
        <button type="submit" class="btn-n">Create Account</button>
        <div class="text-[0.9rem] flex items-center text-gray-500">
          <span class="block">Already have an account?</span>
          <NuxtLink class="ml-2 text-blue-500 underline" to="/login"
            >Sign In</NuxtLink
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
  .register {
    background-image: url("@/assets/images/login-img.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
</style>

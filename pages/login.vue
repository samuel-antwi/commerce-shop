<script setup lang="ts">
  definePageMeta({
    layout: false,
  })

  const router = useRouter()

  const { user: customer } = useUser()

  const user = reactive({
    email: "",
    password: "",
  })

  const { login } = useAuth()

  const handleLogin = () => {
    login(user)
  }

  onMounted(() => {
    if (customer) {
      router.push("/")
    }
  })
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="login"></div>
    <div class="flex items-center justify-center w-9/12 px-4 mx-auto">
      <form @submit.prevent="handleLogin" class="flex flex-col w-full">
        <NavAppLogo />
        <h1 class="pt-12 mb-5 text-5xl">Login</h1>
        <BaseInput v-model="user.email" type="text" label="Email" />
        <BaseInput v-model="user.password" type="password" label="Password" />
        <button type="submit" class="btn-n">Login</button>
        <div class="flex justify-between text-[0.9rem] text-gray-500">
          <p>
            Don't have an account?
            <NuxtLink class="text-blue-500 underline" to="/register"
              >Sign Up</NuxtLink
            >
          </p>
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

  .login {
    background-image: url("@/assets/images/login-img.jpeg");
    background-repeat: no-repeat;
    background-position: 40% 1%;
    width: 100%;
    height: 100vh;
  }
</style>

<script setup lang="ts">
  import { Icon } from "@iconify/vue"
  import { useAuthStore } from "~~/stores/AuthStore"
  import { ChevronLeftIcon, UserIcon } from "@heroicons/vue/outline"
  definePageMeta({
    layout: "account",
    middleware: "auth",
  })

  const { customer } = useAuthStore()
</script>

<template>
  <div>
    <div v-if="!customer">Loading</div>
    <div class="bg-[#eeeeee]">
      <div class="max-w-5xl grid-cols-3 gap-10 px-4 pt-12 mx-auto md:grid">
        <div class="hidden col-span-1 md:block">
          <AccountSidenav />
        </div>
        <div class="col-span-2 p-5 bg-white md:p-10">
          <div class="hidden md:block">
            <Icon class="text-4xl" icon="mdi:card-account-details-outline" />
            <h1 class="pt-4 mb-5 text-3xl font-bold tracking-wide uppercase">
              My details
            </h1>
            <p class="text-gray-700">
              Feel free to edit any of your details below so your Trendo account
              is totally up to date.
            </p>
          </div>
          <div class="flex md:hidden">
            <NuxtLink class="flex items-center mr-10" to="/my-account">
              <ChevronLeftIcon class="w-6 h-6" />
              <UserIcon class="w-6 h-6 -ml-2" />
            </NuxtLink>
            <h1 class="text-2xl font-semibold tracking-wide uppercase">
              My details
            </h1>
          </div>
          <form class="w-full pt-7 md:pt-12 md:w-9/12">
            <BaseInput
              v-model="customer.first_name"
              class="tracking-wide text-gray-600 uppercase"
              label="First name"
              type="text"
              basic
            />
            <BaseInput
              v-model="customer.last_name"
              class="tracking-wide text-gray-600 uppercase"
              label="Last name"
              type="text"
              basic
            />
            <BaseInput
              v-model="customer.phone"
              class="tracking-wide text-gray-600 uppercase"
              label="Phone"
              type="text"
              basic
            />
            <BaseInput
              v-model="customer.email"
              class="tracking-wide text-gray-600"
              label="Email Address"
              type="email"
              basic
            />
            <button
              class="w-full focus:ring-2 focus:outline-none focus:ring-gray-800 focus:ring-offset-2 disabled:bg-[#dddddd] disabled:text-gray-50 px-3 py-3.5 mt-4 hover:bg-gray-800 font-semibold tracking-wide text-gray-200 uppercase bg-black"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

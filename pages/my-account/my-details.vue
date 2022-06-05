<script setup lang="ts">
  import { Icon } from "@iconify/vue"
  import { useAuthStore } from "~~/stores/AuthStore"
  definePageMeta({
    layout: "account",
    middleware: "auth",
  })

  const { customer } = useAuthStore()
</script>

<template>
  <div>
    <div v-if="!customer">Loading</div>
    <div class="min-h-screen bg-[#eeeeee]">
      <div class="grid max-w-5xl grid-cols-3 gap-10 px-4 pt-12 mx-auto">
        <div class="col-span-1">
          <AccountSidenav />
        </div>
        <div class="col-span-2 p-10 bg-white">
          <Icon class="text-4xl" icon="mdi:card-account-details-outline" />
          <h1 class="pt-4 mb-5 text-3xl font-bold tracking-wide uppercase">
            My details
          </h1>
          <p class="text-gray-700">
            Feel free to edit any of your details below so your Trendo account
            is totally up to date.
          </p>
          <form class="w-9/12 pt-12">
            <!-- <input v-model="him" type="text" /> -->
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
              class="w-full disabled:bg-[#dddddd] disabled:text-gray-50 px-3 py-3.5 mt-4 hover:bg-gray-800 font-semibold tracking-wide text-gray-200 uppercase bg-black"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

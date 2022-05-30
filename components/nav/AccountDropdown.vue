<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
  import IconAccountOutline from "~icons/mdi/account-outline"
  import IconClose from "~icons/mdi/close"
  import IconReturn from "~icons/mdi/cash-refund"
  import IconStore from "~icons/mdi/store-outline"
  import IconInformation from "~icons/mdi/information-outline"

  const { user } = useUser()
</script>

<template>
  <div>
    <Menu as="div" class="relative inline-block">
      <div>
        <MenuButton class="flex items-center mt-1">
          <IconAccountOutline />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute w-64 mt-1 bg-white shadow -left-16">
          <div class="flex flex-col space-y-4 text-base text-gray-600">
            <div class="bg-gray-100">
              <div class="flex items-center justify-between p-3">
                <div v-if="user" class="flex items-center">
                  <h2 class="mr-3 font-semibold text-black">
                    Hi
                    <span class="tracking-wider uppercase">{{
                      user.first_name
                    }}</span>
                  </h2>
                  <button
                    type="button"
                    aria-label="Sign out"
                    class="text-sm underline"
                  >
                    Sign Out
                  </button>
                </div>
                <div
                  v-else
                  class="flex items-center text-sm text-gray-600 divide-x-2"
                >
                  <button
                    type="button"
                    aria-label="Sign in"
                    to="/"
                    class="mr-2 underline hover:text-blue-500"
                  >
                    Sign Out
                  </button>
                  <NuxtLink
                    to="/register"
                    class="pl-2 underline hover:text-blue-500"
                    >Join</NuxtLink
                  >
                </div>
                <button type="button" aria-label="Close">
                  <IconClose class="text-xl" />
                </button>
              </div>
            </div>
            <div class="px-3 text-sm">
              <MenuItem>
                <NuxtLink
                  class="flex items-center mb-5 hover:text-blue-500"
                  to="/my-account/overview"
                >
                  <IconAccountOutline class="mr-3 text-2xl" />
                  <span>My Account</span>
                </NuxtLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <NuxtLink
                  class="flex items-center mb-5 hover:text-blue-500"
                  to="/my-account/orders"
                >
                  <IconStore class="mr-3 text-2xl" />
                  <span>My Orders</span>
                </NuxtLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <NuxtLink
                  class="flex items-center mb-5 hover:text-blue-500"
                  to="/my-account/returns"
                >
                  <IconReturn class="mr-3 text-2xl" />
                  <span>My Returns</span>
                </NuxtLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <NuxtLink
                  class="flex items-center mb-5 hover:text-blue-500"
                  to="/"
                >
                  <IconInformation class="mr-3 text-2xl" />
                  <span>Returns Information</span>
                </NuxtLink>
              </MenuItem>
            </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

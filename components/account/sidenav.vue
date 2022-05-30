<script setup>
  import { client } from "@/utils/client"
  import Avatar from "./avatar.vue"
  import LinkItem from "./linkItem.vue"
  import IconPerson from "~icons/bi/person"
  import IconStore from "~icons/mdi/store-outline"
  import IconReturn from "~icons/mdi/cash-refund"
  import IconPersonDetails from "~icons/mdi/card-account-details-outline"
  import IconLock from "~icons/mdi/lock-outline"
  import IconAddress from "~icons/mdi/home-variant-outline"
  import IconLogout from "~icons/mdi/logout"

  const route = useRoute()

  const linkItems = [
    { name: "Account overview", url: "overview", icon: IconPerson },
    { name: "My details", url: "my-details" },
    { name: "My orders", url: "orders" },
    { name: "My returns", url: "returns" },
    { name: "Address book", url: "addresses" },
    { name: "Change password", url: "change-password" },
  ]

  const logOut = async () => {
    try {
      await fetch("http://localhost:9000/store.auth")
    } catch (error) {
      computed.log(error)
    }
  }
</script>

<template>
  <div>
    <Avatar />
    <LinkItem
      class="mb-2 link-item"
      :class="
        route.name === 'my-account-overview'
          ? 'border-l-4  border-blue-500'
          : null
      "
      link="/my-account/overview"
    >
      <IconPerson class="mr-3 text-2xl text-gray-600" />
      <p class="font-semibold">Account overview</p>
    </LinkItem>

    <LinkItem
      class="link-item"
      :class="
        route.name === 'my-account-orders'
          ? 'border-l-4 pr-4 border-blue-500'
          : null
      "
      link="/my-account/orders"
    >
      <IconStore class="mr-3 text-2xl text-gray-600" />
      <p>My orders</p>
    </LinkItem>
    <hr />
    <LinkItem
      class="link-item"
      :class="
        route.name === 'my-account-returns'
          ? 'border-l-4 border-blue-500'
          : null
      "
      link="/my-account/returns"
    >
      <IconReturn class="mr-3 text-2xl text-gray-600" />
      <p>My returns</p>
    </LinkItem>
    <hr />
    <LinkItem
      class="mb-2 link-item"
      :class="
        route.name === 'my-account-my-details'
          ? 'border-l-4 border-blue-500'
          : null
      "
      link="/my-account/my-details"
    >
      <IconPersonDetails class="mr-3 text-2xl text-gray-600" />
      <p>My details</p>
    </LinkItem>

    <LinkItem
      class="link-item"
      :class="
        route.name === 'my-account-change-password'
          ? 'border-l-4 border-blue-500'
          : null
      "
      link="/my-account/change-password"
    >
      <IconLock class="mr-3 text-2xl text-gray-600" />
      <p>Change password</p>
    </LinkItem>
    <hr />
    <LinkItem
      class="link-item"
      :class="
        route.name === 'my-account-addresses'
          ? 'border-l-4 border-blue-500'
          : null
      "
      link="/my-account/addresses"
    >
      <IconAddress class="mr-3 text-2xl text-gray-600" />
      <p>Address book</p>
    </LinkItem>
    <hr />
    <LinkItem @click="logOut" class="link-item">
      <button class="flex" type="button" aria-label="sign out">
        <IconLogout class="mr-3 text-2xl text-gray-600" />
        <p>Sign out</p>
      </button>
    </LinkItem>
  </div>
</template>

<style scoped>
  .link-item:hover p {
    text-decoration: underline;
  }
</style>

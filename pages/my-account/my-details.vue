<script setup lang="ts">
  import IconPersonDetails from "~icons/mdi/card-account-details-outline"
  definePageMeta({
    layout: "account",
  })

  const router = useRouter()
  const hasInputChanged = ref(false)

  const { user } = useUser()

  const name = ref(true)
  const him = ref("")

  if (Object.entries(user.value).length === 0) {
    router.push("/login")
  }

  const newUser = { ...user.value }

  watch(him, () => {
    if (him.value !== "") {
      name.value = false
    } else {
      name.value = true
    }
  })

  const compare = (a, b) => {
    hasInputChanged.value = JSON.stringify(a) === JSON.stringify(b)
    console.log(hasInputChanged.value)
  }
</script>

<template>
  <div class="min-h-screen bg-[#eeeeee]">
    <ClientOnly>
      <div v-if="!user">Loading</div>
      <div v-else>
        <div class="grid max-w-5xl grid-cols-3 gap-10 px-4 pt-12 mx-auto">
          <div class="col-span-1">
            <AccountSidenav />
          </div>
          <div class="col-span-2 p-10 bg-white">
            <IconPersonDetails class="text-3xl" />
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
                v-model="newUser.first_name"
                class="tracking-wide text-gray-600 uppercase"
                label="First name"
                type="text"
                basic
              />
              <BaseInput
                v-model="newUser.last_name"
                class="tracking-wide text-gray-600 uppercase"
                label="Last name"
                type="text"
                basic
              />
              <BaseInput
                v-model="newUser.phone"
                class="tracking-wide text-gray-600 uppercase"
                label="Phone"
                type="text"
                basic
              />
              <BaseInput
                v-model="newUser.email"
                class="tracking-wide text-gray-600"
                label="Email Address"
                type="email"
                basic
              />
              <button
                :disabled="name"
                class="w-full disabled:bg-[#dddddd] disabled:text-gray-50 px-3 py-3.5 mt-4 hover:bg-gray-800 font-semibold tracking-wide text-gray-200 uppercase bg-black"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

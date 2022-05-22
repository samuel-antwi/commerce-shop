<script setup lang="ts">
  import { Menu, MenuButton, MenuItems } from "@headlessui/vue"

  const { fetchCollections } = useFetches()

  const collections = await fetchCollections()
</script>

<template>
  <div>
    <Menu as="div" class="relative inline-block w-[400px]">
      <div>
        <MenuButton> Collections </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute p-5 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg focus:outline-none"
        >
          <div class="grid grid-cols-2 px-1 py-1">
            <CollectionsList
              v-for="collection in collections"
              :key="collection.id"
              :title="collection.title"
              :handle="collection.handle"
              :id="collection.id"
            />
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

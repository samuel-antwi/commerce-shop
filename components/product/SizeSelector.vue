<script setup lang="ts">
  import { Icon } from "@iconify/vue"
  import { ProductVariant } from "@medusajs/medusa"
  import { PropType, ref } from "vue"
  import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue"
  import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid"

  const props = defineProps({
    variants: {
      type: Array as PropType<ProductVariant[]>,
    },
  })

  const { variants } = toRefs(props)

  const selectedSize = ref(variants.value[0]?.title)

  console.log(variants.value)
</script>

<template>
  <div v-if="variants.length" class="mb-5">
    <div class="flex items-center justify-between">
      <span class="text-sm font-semibold tracking-wider text-gray-700 uppercase"
        >Size:</span
      >
      <NuxtLink class="text-sm tracking-wider text-gray-500 underline" to="/"
        >Size Guide</NuxtLink
      >
    </div>
    <div class="mt-3">
      <Listbox v-model="selectedSize">
        <div class="relative mt-1">
          <ListboxButton class="list-box">
            <span class="block truncate">{{ selectedSize }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions class="list-options">
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="v in variants"
                :key="v?.id"
                :value="v?.title"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ v?.title }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  </div>
</template>

<style scoped>
  .list-box {
    @apply relative w-full pl-3 pr-10 text-left bg-white border border-gray-400 py-3 cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm;
  }

  .list-options {
    @apply absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  }
</style>

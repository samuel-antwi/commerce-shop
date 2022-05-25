import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/tailwind.css"],
  runtimeConfig: {
    public: {
      medusaUrl: process.env.NUXT_PUBLIC_MEDUSA_URL,
    },
  },
  // ssr: false,
  buildModules: ["@vueuse/nuxt", "@pinia/nuxt", ["unplugin-icons/nuxt"]],

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["@headlessui/vue"],
  },
})

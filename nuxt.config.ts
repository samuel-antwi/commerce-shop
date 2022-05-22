import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  runtimeConfig: {
    public: {
      medusaUrl: process.env.NUXT_PUBLIC_MEDUSA_URL,
    },
  },
  // ssr: false,
  buildModules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    ["unplugin-icons/nuxt"],
    "./modules/storesAutoImports.ts",
  ],

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["@headlessui/vue"],
  },

  // runtimeConfig: {
  //   public: {
  //     BACKEND_URL:
  //       process.env.NUXT_PUBLIC_MEDUSA_URL || "http://localhost:9000",
  //   },
  // },
})

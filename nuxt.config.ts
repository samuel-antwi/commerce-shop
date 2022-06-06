import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", ["unplugin-icons/nuxt"]],
  buildModules: ["@pinia/nuxt"],

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["@headlessui/vue", "unplugin-icons/nuxt", "@heroicons/vue"],
  },
  css: ["~/assets/css/tailwind.css"],
  runtimeConfig: {
    public: {
      BACKEND_URL:
        process.env.NUXT_PUBLIC_MEDUSA_URL || "http://localhost:9000",
    },
  },
})

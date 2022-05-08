import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],
  buildModules: [
    [
      "unplugin-icons/nuxt",
      {
        /* options */
      },
    ],
  ],

  css: ["@/assets/css/index.css"],
})

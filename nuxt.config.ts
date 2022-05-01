import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: [
    [
      "unplugin-icons/nuxt",
      {
        /* options */
      },
    ],
    "@pinia/nuxt",
  ],

  css: ["@/assets/css/index.css"],
})

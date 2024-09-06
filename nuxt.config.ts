import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "app": fileURLToPath(new URL("./app", import.meta.url)),
    "mixins:reset": fileURLToPath(new URL("./app/assets/styles/mixins/reset.scss", import.meta.url)),
    "mixins:ui": fileURLToPath(new URL("./app/assets/styles/mixins/ui.scss", import.meta.url)),
    "styles": fileURLToPath(new URL("./app/assets/styles", import.meta.url)),
    "styles:colour": fileURLToPath(new URL("./app/assets/styles/partials/_colour.scss", import.meta.url)),
    "styles:easing": fileURLToPath(new URL("./app/assets/styles/partials/_easing.scss", import.meta.url)),
    "styles:size": fileURLToPath(new URL("./app/assets/styles/partials/_size.scss", import.meta.url)),
    "styles:time": fileURLToPath(new URL("./app/assets/styles/partials/_time.scss", import.meta.url)),
    "ui": fileURLToPath(new URL("./layers/ui", import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://rsms.me/",
        },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/styles/index.scss"],
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ["@vueuse/nuxt"],
});

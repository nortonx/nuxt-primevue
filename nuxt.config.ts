// https://nuxt.com/docs/api/configuration/nuxt-config

import pkg from "./package.json";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  devtools: { enabled: true },

  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "@nuxt/eslint",
  ],

  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV,
    },
  },

  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    cssLayerOrder: "primevue",
    directives: {
      include: ["Ripple", "Tooltip"],
    },
    components: {
      include: [
        "DataTable",
        "Column",
        "Button",
        "InputText",
        "IconField",
        "InputIcon",
        "Menubar",
      ],
    },
  },

  css: [
    "primevue/resources/themes/saga-purple/theme.css",
    "primevue/resources/primevue.min.css",
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
  ],

  devServer: {
    port: 3080,
  },

  compatibilityDate: "2024-08-21",
});

// https://nuxt.com/docs/api/configuration/nuxt-config

import pkg from './package.json'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV,
    }
  },
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    cssLayerOrder: 'primevue',
    directives: {
      include: ['Ripple', 'Tooltip']
    },
    components: {
      include: ['DataTable', 'Column', 'Button', 'InputText', 'IconField', 'InputIcon', 'Menubar']
    }
  },
  css: [
    'primevue/resources/themes/saga-purple/theme.css',
    'primevue/resources/primevue.min.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css'
  ],
  devServer: {
    port: 3080,
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxt/test-utils/module',
  ],
  primevue: {
    theme: 'saga-blue',
    ripple: true,
    cssLayerOrder: 'reset,primevue',
    directives: {
      include: ['Ripple', 'Tooltip']
    }
  },
  css: ['primevue/resources/themes/saga-blue/theme.css', 'primevue/resources/primevue.min.css', 'primeicons/primeicons.css'],
})

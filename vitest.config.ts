import { defineVitestConfig } from '@nuxt/test-utils/config'
import Vue from "@vitejs/plugin-vue"

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        }
      }
    }
  },
  plugins: [
    Vue()
  ]
})
import { defineVitestConfig } from '@nuxt/test-utils/config'
import Vue from "@vitejs/plugin-vue"

export default defineVitestConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
  plugins: [
    Vue()
  ]
})
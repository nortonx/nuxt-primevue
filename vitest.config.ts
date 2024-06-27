import { defineVitestConfig } from '@nuxt/test-utils/config'
import { resolve } from 'path'

export default defineVitestConfig({
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.ts'],
    deps: {
      optimizer: {
        web: {
          include: ['@vue', '@vueuse', '@vue/composition-api'],
        }
      }
    },
    globals: true,
    reporters: 'dot',
    setupFiles: [resolve(__dirname, 'test/setup.ts')]
  },
  plugins: [
    
  ]
})
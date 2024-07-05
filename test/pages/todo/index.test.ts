import { mount } from "@vue/test-utils"
import Todo from "@/pages/todo/index.vue"
import { describe, it, expect, beforeEach } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

describe('Todo page', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(Todo, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })
  it('should render correctly and match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
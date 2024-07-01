import { shallowMount } from "@vue/test-utils"
import Todo from "@/pages/todo/index.vue"
import { describe, it, expect, beforeEach } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

describe('Todo page', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })
  it('should render correctly and match snapshot', () => {

    expect(wrapper.html()).toMatchSnapshot()
  })
})
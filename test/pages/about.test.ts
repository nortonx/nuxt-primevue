import { shallowMount } from "@vue/test-utils"
import About from "@/pages/about.vue"
import { describe, it, expect } from 'vitest'

describe('About page', () => {
  it('should render correctly and match snapshot', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
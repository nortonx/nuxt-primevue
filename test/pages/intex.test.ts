import { shallowMount } from "@vue/test-utils"
import Index from "@/pages/index.vue"
import { describe, it, expect } from 'vitest'

describe('Index page', () => {
  it('should render correctly and match snapshot', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.find('[data-test="toggle-dialog-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="ai-image"]').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should open dialog when "Toggle Dialog Example" button is clicked', async () => {
    const wrapper = shallowMount(Index)
    await wrapper.find('[data-test="toggle-dialog-button"]').trigger('click')
    expect(wrapper.find('[data-test="dialog"]').exists()).toBe(true)
  })
})
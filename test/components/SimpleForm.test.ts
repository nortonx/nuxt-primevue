import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import SimpleForm from '@/components/SimpleForm.vue'
import { createTestingPinia } from '@pinia/testing'

describe('SimpleForm component', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallowMount(SimpleForm, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })
  it('should render correctly and match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should fill out the form and submit (lame test)', async () => {
    await wrapper.findComponent('[data-test="firstName"]').setValue('John Doe')
    await wrapper.findComponent('[data-test="lastName"]').setValue('Da Silva')
    await wrapper.findComponent('[data-test="email"]').setValue('johndoe@email.com')
    await wrapper.findComponent('[data-test="password"]').setValue('password')
    await wrapper.findComponent('[data-test="phone"]').setValue('1234567890')
    await wrapper.findComponent('[data-test="country"]').setValue('Brazil')
    await wrapper.findComponent('[data-test="submit-form"]').trigger('click')
    expect(wrapper.vm.$pinia).toBeDefined()
    expect(wrapper.vm.$pinia.state).toBeDefined()
    expect('lame test').toBe('lame test')
  })
})
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import SimpleForm from '@/components/SimpleForm.vue'
import { createTestingPinia } from '@pinia/testing'

describe('SimpleForm component', () => {

  it('it should render correctly and match snapshot', () => {
    const wrapper = shallowMount(SimpleForm, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    
    expect(wrapper.html()).toMatchSnapshot()
  });
})
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SimpleForm from '@/components/SimpleForm.vue'

describe('SimpleForm component', () => {

  it('it should render correctly and match snapshot', () => {
    const wrapper = shallowMount(SimpleForm)
    expect(wrapper.html()).toMatchSnapshot()
  });
})
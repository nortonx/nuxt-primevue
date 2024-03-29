import { mount } from '@vue/test-utils'
import CounterBox from '../../components/CounterBox.vue'
import { test, expect } from 'vitest'

test('CounterBox component renders correctly', () => {
  const wrapper = mount(CounterBox)
  expect(wrapper.html()).toMatchSnapshot()
})

test('CounterBox component renders with correct props', () => {
  const wrapper = mount(CounterBox, {
    props: {
      counter: 5,
      label: "Words"
    }
  })
  expect(wrapper.find('.counter').text()).toBe('5')
  expect(wrapper.find('.label').text()).toBe('Words')
})
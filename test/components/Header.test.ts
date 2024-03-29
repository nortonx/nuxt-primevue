import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import { test, expect } from 'vitest';

test.skip('Header component renders correctly', () => {
  const wrapper = mount(Header);
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from 'vitest';
import Footer from '@/components/Footer.vue';

test('Footer component renders correctly', () => {
  const wrapper = mount(Footer);
  expect(wrapper.html()).toMatchSnapshot();
});

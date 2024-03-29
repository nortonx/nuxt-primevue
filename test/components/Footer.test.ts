import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';
import { test, expect } from 'vitest';

test('Footer component renders correctly', async () => {
  const wrapper = await mount(Footer);
  expect(wrapper.html()).toMatchSnapshot();
});

test('Footer component renders with correct text value', () => {
  const wrapper = mount(Footer);
  const expectedText = `© ${new Date().getFullYear()}`;
  console.log('expectedText', expectedText)
  const actualText = wrapper.find('.footer-text').text();
  console.log('actualText', actualText)
  expect(actualText).toBe(expectedText);
});

 
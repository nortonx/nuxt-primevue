// @vitest-environment nuxt
import Footer from '@/components/Footer.vue'
import { test } from "vitest"
import { mountSuspended } from "@nuxt/test-utils/runtime"

test('Footer component renders correctly', async () => {
  const wrapper = await mountSuspended(Footer);
  expect(wrapper.html()).toMatchSnapshot();
});

import { shallowMount, type VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import SimpleForm from "@/components/SimpleForm.vue";
import { createTestingPinia } from "@pinia/testing";

describe("SimpleForm component", () => {
  let wrapper: VueWrapper<unknown>;
  beforeEach(() => {
    wrapper = shallowMount(SimpleForm, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });
  it("it should render correctly and match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

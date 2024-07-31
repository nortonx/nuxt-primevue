import { shallowMount, VueWrapper } from "@vue/test-utils";
import Todo from "@/pages/todo/index.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";

describe("Todo page", () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });
  it("should render correctly and match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

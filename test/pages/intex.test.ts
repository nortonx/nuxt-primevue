import { shallowMount } from "@vue/test-utils";
import Index from "@/pages/index.vue";
import { describe, it, expect } from "vitest";

describe("Index page", () => {
  it("should render correctly and match snapshot", () => {
    const wrapper = shallowMount(Index);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

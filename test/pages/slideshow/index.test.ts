import { shallowMount } from "@vue/test-utils";
import Slideshow from "@/pages/slideshow/index.vue";
import { describe, it, expect } from "vitest";

describe("Slideshow page", () => {
  it("should render correctly and match snapshot", () => {
    const wrapper = shallowMount(Slideshow);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

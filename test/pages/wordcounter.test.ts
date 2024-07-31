import { shallowMount } from "@vue/test-utils";
import Wordcounter from "@/pages/wordcounter.vue";
import { describe, it, expect } from "vitest";

describe("Wordcounter page", () => {
  it("should render correctly and match snapshot", () => {
    const wrapper = shallowMount(Wordcounter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

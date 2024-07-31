import { shallowMount } from "@vue/test-utils";
import Data from "@/pages/data.vue";
import { describe, it, expect } from "vitest";

describe("Data page", () => {
  it("should render correctly and match snapshot", () => {
    const wrapper = shallowMount(Data);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

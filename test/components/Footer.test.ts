import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";
import { describe, it, expect, beforeEach } from "vitest";

describe("Footer component", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(Footer);
  });

  it("should render correctly and match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render with correct text value", () => {
    const expectedText = `© ${new Date().getFullYear()}`;
    const actualText = wrapper.find(".footer-text").text();
    expect(actualText).toBe(expectedText);
  });
});

import { shallowMount } from "@vue/test-utils";
import Form from "@/pages/form.vue";
import { describe, it, expect } from "vitest";

describe("Form page", () => {
  it("should render correctly and match snapshot", () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

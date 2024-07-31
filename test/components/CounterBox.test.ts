import { shallowMount } from "@vue/test-utils";
import CounterBox from "@/components/CounterBox.vue";
import { describe, it, expect, beforeEach } from "vitest";

describe("CounterBox component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(CounterBox, {
      props: {
        counter: 0,
        label: "Words",
      },
    });
  });

  it("should render correctly and match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render with correct props", () => {
    expect(wrapper.find(".counter").text()).toBe("0");
    expect(wrapper.find(".label").text()).toBe("Words");

    const wrapper2 = shallowMount(CounterBox, {
      props: {
        counter: 5,
        label: "Words",
      },
    });

    expect(wrapper2.find(".counter").text()).toBe("5");
    expect(wrapper2.find(".label").text()).toBe("Words");
  });
});

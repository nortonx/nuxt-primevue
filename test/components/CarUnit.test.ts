import { shallowMount, type VueWrapper } from "@vue/test-utils";
import CarUnit from "@/components/CarUnit.vue";
import { describe, it, expect, beforeEach } from "vitest";

describe("Car component", () => {
  let wrapper: VueWrapper<unknown>;

  beforeEach(() => {
    wrapper = shallowMount(CarUnit, {
      props: {
        carModel: "Toyota",
        carPlate: "ABC-1234",
        carColor: "black",
        carOwner: "John Doe",
      },
    });
  });

  it("should render correctly and match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render correctly with props and match snapshot", () => {
    expect(wrapper.find(".car-model").text()).toBe(
      `Model: ${wrapper.props().carModel}`,
    );
    expect(wrapper.find(".car-plate").text()).toBe(
      `Plate: ${wrapper.props().carPlate}`,
    );
    expect(wrapper.find(".car-color").text()).toBe(
      `Color: ${wrapper.props().carColor}`,
    );
    expect(wrapper.find(".car-owner").text()).toBe(
      `Owner: ${wrapper.props().carOwner}`,
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});

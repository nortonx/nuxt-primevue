/*
  A unit test with "mount" would be an integrated test since it mounts the component and its children.
  A unit test with "shallowMount" would be a unit test since it mounts the component only.
*/
import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import { describe, it, expect, beforeEach } from "vitest";

describe("Header component", () => {
  let wrapper: any;

  const items = [
    {
      label: "Home",
      icon: "home",
      to: "/",
    },
    {
      label: "About",
      icon: "info",
      to: "/about",
    },
  ];

  beforeEach(() => {
    wrapper = shallowMount(Header, { props: { items } });
  });
  it("it should render correctly and match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

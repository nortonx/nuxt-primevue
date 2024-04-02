/*
  A unit test with "mount" would be an integrated test since it mounts the component and its children.
  A unit test with "shallowMount" would be a unit test since it mounts the component only.
*/
import { shallowMount } from '@vue/test-utils';
import Header from '../../components/Header.vue';
import { describe, it, expect } from 'vitest';

describe('Header component', () => {

  it('it should render correctly and match snapshot', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  });
})

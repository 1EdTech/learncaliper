import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Welcome from '../src/components/Welcome';

describe('Component: Welcome', () => {
  it('should render the Welcome component', () => {
    const wrapper = shallow(
      <Welcome name="World" />
    );

    expect(wrapper.find('h1').text()).toEqual('Hello, World!');
  });

  it('should run a solid smoke test', () => {
    expect(true).toEqual(false);
  });
});

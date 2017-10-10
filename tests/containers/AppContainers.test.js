/* global test describe expect:true */
import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../../src/containers/AppContainer';

describe('<AppContainer />', () => {
  const wrapper = shallow(<AppContainer />);

  test('App does not render as empty or null', () => {
    expect(wrapper.getElement()).toBeTruthy();
  });
});

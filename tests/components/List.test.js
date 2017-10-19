/* global test describe expect:true */
import React from 'react';
import { shallow } from 'enzyme';

import List from '../../src/components/List';

const mockData = ['hugo', 'paco', 'luis'];

describe('<List />', () => {
  const wrapper = shallow(<List list={ mockData } />);
  const wrapperEmpty = shallow(<List list={ [] } />);

  test('Test that print the number of the list of mockdata', () => {
    expect(wrapper.find('li').length).toBe(mockData.length);
  });

  test('Test that an item has the same name of the mockedData', () => {
    expect(wrapper.find('ul').childAt(0).text()).toBe(mockData[0]);
  });

  test('If passed empty data no <li> is rendered', () => {
    expect(wrapperEmpty.find('ul').children().length).toBe(0);
  });
});

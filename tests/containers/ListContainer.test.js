/* global test describe jest expect:true */
import React from 'react';
import { shallow } from 'enzyme';

import { ListContainer } from '../../src/containers/ListContainer';

const listMock = ['hugo', 'paco', 'luis'];

describe('<ListContainer />', () => {
  const wrapperLoading = shallow(
    <ListContainer
      list={ listMock }
      params={{ id: null }}
      isLoading
      fetchList={ jest.fn() }
    />
  );

  const wrapperReady = shallow(
    <ListContainer
      params={{ id: null }}
      list={ listMock }
      fetchList={ jest.fn() }
    />
  );

  test('The component is loading', () => {
    expect(wrapperLoading.find('h2').length).toBeTruthy();
  });

  test('The component is displaying the List component', () => {
    expect(wrapperReady.find('List').length).toBeTruthy();
  });
});

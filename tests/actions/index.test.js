/* global test describe expect:true */

import { REQUEST_LIST, RECEIVE_LIST } from '../../src/actions/actionTypes';
import { fetchListRequest, fetchListReceive } from '../../src/actions';

describe('<AppContainer />', () => {
  const mockList = ['hugo', 'paco', 'luis'];

  test('REQUEST_LIST action', () => {
    expect(fetchListRequest()).toEqual({
      type: REQUEST_LIST
    });
  });

  test('RECEIVE_LIST action', () => {
    expect(fetchListReceive(mockList)).toEqual({
      type: RECEIVE_LIST,
      list: mockList
    });
  });
});

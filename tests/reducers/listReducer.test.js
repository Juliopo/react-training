/* global test describe expect:true */

import { fetchListRequest, fetchListReceive } from '../../src/actions';
import listReducer from '../../src/reducers/listReducer/';

describe('<AppContainer />', () => {
  const mockedData = ['hugo', 'paco', 'luis'];
  const expectedState = {
    isLoading: true,
    list: []
  };
  const listExpectedResult = {
    isLoading: false,
    list: mockedData
  };

  test('REQUEST_LIST reducer', () => {
    expect(listReducer(undefined, fetchListRequest())).toEqual(expectedState);
  });


  test('RECEIVE_LIST reducer', () => {
    expect(listReducer(undefined, fetchListReceive(mockedData))).toEqual(listExpectedResult);
  });
});

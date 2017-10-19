import {
  REQUEST_LIST,
  RECEIVE_LIST
} from './actionTypes';

const mockData = ['hugo', 'paco', 'luis'];


export const fetchListRequest = () => {
  return {
    type: REQUEST_LIST
  };
};

export const fetchListReceive = (list) => {
  return {
    type: RECEIVE_LIST,
    list
  };
};

export const fetchList = () => (dispatch) => {
  dispatch(fetchListRequest());
  setTimeout(() => {
    dispatch(fetchListReceive(mockData));
  }, 1000);
};

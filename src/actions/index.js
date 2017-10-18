import {
  REQUEST_LIST,
  RECEIVE_LIST
} from './actionTypes';

const mockData = ['hugo', 'paco', 'luis'];


const fetchListRequest = () => {
  return {
    type: REQUEST_LIST
  };
};

const fetchListReceive = (list) => {
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

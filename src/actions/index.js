import _ from 'lodash';

import {
  REQUEST_LIST,
  RECEIVE_LIST,
  RECEIVE_ITEM_LIST,
  REQUEST_ITEM_LIST,
  REQUEST_UPDATE,
  RECEIVE_UPDATE
} from './actionTypes';
import mockData from '../mockData/list';


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

export const fetchListItemRequest = () => {
  return {
    type: REQUEST_ITEM_LIST
  };
};

export const fetchListItemReceive = (item) => {
  return {
    type: RECEIVE_ITEM_LIST,
    item
  };
};

export const requestUpdate = () => {
  return {
    type: REQUEST_UPDATE
  };
};

export const receiveUpdate = () => {
  return {
    type: RECEIVE_UPDATE
  };
};

export const editUpdate = item => (dispatch) => {
  dispatch(requestUpdate());
  setTimeout(() => {
    _.forEach(mockData, (itemList, index) => {
      if (itemList.id === item.id) {
        mockData[index] = item;
      } else {
        console.log('no lo encointró');
      }
    });
    dispatch(receiveUpdate());
  }, 250);
};

export const fetchListItem = id => (dispatch) => {
  dispatch(fetchListItemRequest());
  setTimeout(() => {
    const [itemList] = _.filter(mockData, (item) => {
      return item.id === id;
    });
    dispatch(fetchListItemReceive(itemList));
  }, 250);
};

export const fetchList = () => (dispatch) => {
  dispatch(fetchListRequest());
  setTimeout(() => {
    dispatch(fetchListReceive(mockData));
  }, 1000);
};

import _ from 'lodash';

import * as actionTypes from '../actions/actionTypes';


const defaultState = {
  isLoading: false,
  item: {},
  isUpdating: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_ITEM_LIST:
      return _.assign({}, state, {
        isLoading: true
      });

    case actionTypes.RECEIVE_ITEM_LIST:
      return _.assign({}, state, {
        isLoading: false,
        item: action.item
      });

    case actionTypes.REQUEST_UPDATE:
      return _.assign({}, state, {
        isUpdating: true
      });

    case actionTypes.RECEIVE_UPDATE:
      return _.assign({}, state, {
        isUpdating: false,
        item: {}
      });
    default:
      return state;
  }
};

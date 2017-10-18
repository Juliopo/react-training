import _ from 'lodash';

import * as actionTypes from '../actions/actionTypes';


const defaultState = {
  isLoading: false,
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LIST:
      return _.assign({}, state, {
        isLoading: true
      });

    case actionTypes.RECEIVE_LIST:
      return _.assign({}, state, {
        isLoading: false,
        list: action.list
      });
    default:
      return state;
  }
};

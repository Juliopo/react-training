import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import listReducer from './listReducer';
import editReducer from './editReducer';

const rootReducer = combineReducers({
  listReducer,
  editReducer,
  routing: routerReducer
});

export default rootReducer;

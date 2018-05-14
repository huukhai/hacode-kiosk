// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import products from './products';

const rootReducer = combineReducers({
  counter,
  products,
  router,
});

export default rootReducer;

// @flow
import { ADD_PRODUCT, PUSH_ALL_PRODUCTS } from '../actions/products';

export default function products(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const addStateCategory = { ...state[action.data.category] } || {};
      let addStateCategoryData = addStateCategory["data"] || [];
      addStateCategoryData.push(action.data.product);
      return { ...state, [action.data.category]: { ...addStateCategory, data: addStateCategoryData } };
    case PUSH_ALL_PRODUCTS:
      let pushState = {}
      if (action.data.category) {
        pushState = { ...state, [action.data.category]: action.data.products };
      } else {
        pushState = { ...action.data.products };
      }
      return pushState;
    default:
      return state;
  }
}

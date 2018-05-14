// @flow
import { ADD_PRODUCT, PUSH_ALL_PRODUCTS } from '../actions/products';

export default function products(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let add_state_category = { ...state[action.data.category] } || {};
      let add_state_category_data = add_state_category["data"] || [];
      add_state_category_data.push(action.data.product);
      return { ...state, [action.data.category]: { ...add_state_category, "data": add_state_category_data } };
    case PUSH_ALL_PRODUCTS:
      let push_state = {}
      if (action.data.category) {
        push_state = { ...state, [action.data.category]: action.data.products };
      } else {
        push_state = { ...action.data.products };
      }
      return push_state;
    default:
      return state;
  }
}

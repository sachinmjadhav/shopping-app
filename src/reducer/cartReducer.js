import { ADD_ITEM_TO_CART } from '../actions/types';

const initialState = {
  cartItems: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...cartItems, action.payload]
      }
    default:
      return state;
  }
}
import { 
  ADD_ITEM_TO_CART, 
  REMOVE_ITEM_FROM_CART, 
  INCREMENT_CART_ITEM_COUNT, 
  DECREMENT_CART_ITEM_COUNT 
} from './types';

export const addToCart = item => dispatch => dispatch({ type: ADD_ITEM_TO_CART, payload: item  });

export const removeFromCart = id => dispatch => dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id });

export const incrementItemCount = id => dispatch => dispatch({ type: INCREMENT_CART_ITEM_COUNT, payload: id });

export const decrementItemCount = id => dispatch => dispatch({ type: DECREMENT_CART_ITEM_COUNT, payload: id });
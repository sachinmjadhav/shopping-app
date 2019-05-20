import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './types';

export const addToCart = item => dispatch => dispatch({ type: ADD_ITEM_TO_CART, payload: item  })

export const removeFromCart = id => dispatch => dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id })
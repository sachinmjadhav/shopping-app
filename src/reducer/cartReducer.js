import { 
  ADD_ITEM_TO_CART, 
  REMOVE_ITEM_FROM_CART, 
  INCREMENT_CART_ITEM_COUNT, 
  DECREMENT_CART_ITEM_COUNT 
} from '../actions/types';
import { find } from 'lodash'

const initialState = [];

const addToCart = (cart, product) => {
  const cartItem = find(cart, (c => c.id === product.id));
  
  // add 'quantity' property to new item
  if(!product.quantity) {
    product['quantity'] = 1;
  }
  
  if(cartItem) {
    cartItem.quantity++;
  } else {
    cart.push(product);
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_CART: {
      let updatedCart = [...state];
      addToCart(updatedCart, action.payload)
      return updatedCart;
    }
    case REMOVE_ITEM_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case INCREMENT_CART_ITEM_COUNT: {
      let updatedCart = [...state];
      updatedCart.forEach(item => (item.id === action.payload) ? item.quantity++ : item)
      return updatedCart
    }
    case DECREMENT_CART_ITEM_COUNT: {
      let updatedCart = [...state];
      updatedCart.forEach(item => (item.id === action.payload) ? item.quantity > 1 ? item.quantity-- : item : item)
      return updatedCart;
    }
    default:
      return state;
  }
}
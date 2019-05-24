import { GET_PRODUCTS, PRODUCTS_LOADING, ADD_PRODUCT } from '../actions/types';

const initialState = {
  productsList: [],
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
        loading: false
      }
    case ADD_PRODUCT:
      return {
        ...state,
        productsList: [action.payload, ...state.productsList]
      }
    default:
      return state;
  }
} 
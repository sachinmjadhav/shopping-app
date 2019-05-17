import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_LOADING } from './types';

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get('https://5cdd205ab22718001417c389.mockapi.io/api/products')
    .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
}

export const setProductsLoading = () => ({ type: PRODUCTS_LOADING });
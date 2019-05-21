import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_LOADING } from './types';
import { GET_ALL_PRODUCTS } from '../URIs';

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get(GET_ALL_PRODUCTS)
    .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
}

export const setProductsLoading = () => ({ type: PRODUCTS_LOADING });
import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_LOADING } from './types';
import { GET } from '../URIs';

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get(GET)
    .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
}

export const setProductsLoading = () => ({ type: PRODUCTS_LOADING });
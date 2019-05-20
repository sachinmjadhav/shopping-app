import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_LOADING } from './types';
import { GET_ALL } from '../URIs';

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get(GET_ALL)
    .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
}

export const setProductsLoading = () => ({ type: PRODUCTS_LOADING });
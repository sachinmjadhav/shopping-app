import axios from 'axios';
import { UPDATE_ITEM, ADD_PRODUCT } from './types';
import { ITEM_UPDATE, POST_PRODUCT } from '../URIs';

export const updateItem = item => dispatch => {
  axios
    .put(ITEM_UPDATE(item.id))
    .then(res => {
      console.log('post data', res)
      dispatch({ type: UPDATE_ITEM, payload: item })
    });
}

export const addProduct = item => dispatch => {
  axios
    .post(POST_PRODUCT)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_PRODUCT, payload: item })
    })
}
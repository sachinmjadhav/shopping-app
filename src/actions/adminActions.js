import axios from 'axios';
import { UPDATE_ITEM } from './types';
import { ITEM_UPDATE } from '../URIs';

export const updateItem = item => dispatch => {
  axios
    .put(ITEM_UPDATE(item.id))
    .then(res => {
      console.log('post data', res)
      dispatch({ type: UPDATE_ITEM, payload: item })
    });
}
import { UPDATE_ITEM } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_ITEM:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import adminReducer from './adminReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  admin: adminReducer,
  form: formReducer
});
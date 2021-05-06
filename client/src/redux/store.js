import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import { cartReducer } from './reducers/cartReducers'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers'
import { authReducer } from './reducers/authReducer'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  authReducer: authReducer

})


const middleware = [thunk];

export const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
  );
  
  const token = localStorage.getItem('jsonwebtoken')
  store.dispatch({type: 'ON_LOGIN', payload: token })
  
export default store;
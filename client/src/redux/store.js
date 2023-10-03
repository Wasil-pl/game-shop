import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import { productsReducer } from './products/productsReducer';
import { usersReducer } from './users/usersReducer';
import { cartReducer } from './cart/cartReducer';
import { ordersReducer } from './orders/ordersReducer';
import { bannerReducer } from './bannerRedux';
import screenReducer from './screenSizeRedux';

const subreducers = {
  products: productsReducer,
  users: usersReducer,
  orders: ordersReducer,
  banner: bannerReducer,
  cart: cartReducer,
  screenMode: screenReducer,
};

// combine reducers
const rootReducer = combineReducers(subreducers);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;

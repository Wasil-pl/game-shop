import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import { productsReducer } from './productsRedux';
import { usersReducer } from './usersRedux';
import { ordersReducer } from './ordersRedux';
import { bannerReducer } from './bannerRedux';
import { cartReducer } from './cartRedux';
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

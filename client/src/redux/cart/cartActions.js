import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
} from './cartActionTypes';

export const addProductToCart = (payload) => ({
  payload,
  type: ADD_PRODUCT_TO_CART,
});
export const removeProductFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT_FROM_CART,
});
export const removeAllProductsFromCart = () => ({
  type: REMOVE_ALL_PRODUCTS_FROM_CART,
});
export const increaseProductQuantityInCart = (payload) => ({
  payload,
  type: INCREASE_PRODUCT_QUANTITY_IN_CART,
});
export const decreaseProductQuantityInCart = (payload) => ({
  payload,
  type: DECREASE_PRODUCT_QUANTITY_IN_CART,
});

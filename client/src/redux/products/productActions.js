import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_BY_PLATFORM,
  SEARCH_PRODUCTS,
  LOAD_PRODUCT,
} from './productActionTypes';

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProductsByPlatform = (payload) => ({
  payload,
  type: LOAD_PRODUCTS_BY_PLATFORM,
});
export const searchProducts = (payload) => ({ payload, type: SEARCH_PRODUCTS });
export const loadProductById = (payload) => ({ payload, type: LOAD_PRODUCT });

import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_BY_PLATFORM,
  SEARCH_PRODUCTS,
  LOAD_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT_CONTENT_SUCCESS,
  ADD_PRODUCT_CONTENT_ERROR,
  ADD_PRODUCT_IMAGES_SUCCESS,
  ADD_PRODUCT_IMAGES_ERROR,
  ADD_PRODUCT_ISACTIVE_SUCCESS,
  ADD_PRODUCT_ISACTIVE_ERROR,
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
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const editProduct = (payload) => ({ payload, type: EDIT_PRODUCT });
export const addProductContentSuccess = (payload) => ({
  payload,
  type: ADD_PRODUCT_CONTENT_SUCCESS,
});
export const addProductContentError = (payload) => ({
  payload,
  type: ADD_PRODUCT_CONTENT_ERROR,
});
export const addProductImagesSuccess = (payload) => ({
  payload,
  type: ADD_PRODUCT_IMAGES_SUCCESS,
});
export const addProductImagesError = (payload) => ({
  payload,
  type: ADD_PRODUCT_IMAGES_ERROR,
});
export const activateProductSuccess = (payload) => ({
  payload,
  type: ADD_PRODUCT_ISACTIVE_SUCCESS,
});
export const activateProductError = (payload) => ({
  payload,
  type: ADD_PRODUCT_ISACTIVE_ERROR,
});
export const resetProductStates = () => ({
  type: 'RESET_PRODUCT_STATES',
});

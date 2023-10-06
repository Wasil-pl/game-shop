import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_ISACTIVE,
  LOAD_PRODUCTS_BY_PLATFORM,
  SEARCH_PRODUCTS,
  LOAD_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_EDIT_PRODUCT_CONTENT_SUCCESS,
  ADD_EDIT_PRODUCT_CONTENT_ERROR,
  ADD_EDIT_PRODUCT_IMAGES_SUCCESS,
  ADD_EDIT_PRODUCT_IMAGES_ERROR,
  ADD_EDIT_PRODUCT_ISACTIVE_SUCCESS,
  ADD_EDIT_PRODUCT_ISACTIVE_ERROR,
} from './productActionTypes';

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProductsIsActive = (payload) => ({
  payload,
  type: LOAD_PRODUCTS_ISACTIVE,
});
export const loadProductsByPlatform = (payload) => ({
  payload,
  type: LOAD_PRODUCTS_BY_PLATFORM,
});
export const searchProducts = (payload) => ({ payload, type: SEARCH_PRODUCTS });
export const loadProductById = (payload) => ({ payload, type: LOAD_PRODUCT });
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const editProduct = (payload) => ({ payload, type: EDIT_PRODUCT });
export const deleteProduct = (payload) => ({ payload, type: DELETE_PRODUCT });
export const addEditProductContentSuccess = (payload) => ({
  payload,
  type: ADD_EDIT_PRODUCT_CONTENT_SUCCESS,
});
export const addEditProductContentError = (payload) => ({
  payload,
  type: ADD_EDIT_PRODUCT_CONTENT_ERROR,
});
export const addEditProductImagesSuccess = (payload) => ({
  payload,
  type: ADD_EDIT_PRODUCT_IMAGES_SUCCESS,
});
export const addEditProductImagesError = (payload) => ({
  payload,
  type: ADD_EDIT_PRODUCT_IMAGES_ERROR,
});
export const activateProductSuccess = (payload) => ({
  payload,
  type: ADD_EDIT_PRODUCT_ISACTIVE_SUCCESS,
});
export const activateProductError = (payload) => ({
  payload,
  type: ADD_EDIT_PRODUCT_ISACTIVE_ERROR,
});
export const resetProductStates = () => ({
  type: 'RESET_PRODUCT_STATES',
});

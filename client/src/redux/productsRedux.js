import { httpClient } from '../api/httpClient';
import { API_URL } from '../config';
import { createSelector } from 'reselect';

/* SELECTORS */
export const getAllProducts = (state) => state.products.list;
export const getProductsByPlatform = (state) => state.products.listByPlatform;
export const getProductsBySearchPhrase = (state) => state.products.searchList;
export const getAllActiveProducts = createSelector(getAllProducts, (products) =>
  products.filter((product) => product.isActive),
);
export const getSaleProducts = createSelector(
  getAllActiveProducts,
  (products) => products.filter((product) => product.salePrice),
);
export const getNewProducts = createSelector(
  getAllActiveProducts,
  (products) => {
    return products
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 10);
  },
);

export const getErrorState = (state) => state.products.error;
export const getLoadingState = (state) => state.products.loading;

/* ACTIONS */
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProductsByPlatform = (payload) => ({
  payload,
  type: LOAD_PRODUCTS_BY_PLATFORM,
});
export const searchProducts = (payload) => ({ payload, type: SEARCH_PRODUCTS });

const createActionName = (name) => `app/products/${name}`;
const START_REQUEST = createActionName('START_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_PRODUCTS_BY_PLATFORM = createActionName('LOAD_PRODUCTS_BY_PLATFORM');
const SEARCH_PRODUCTS = createActionName('SEARCH_PRODUCTS');

/* THUNKS */
export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/products`);
      dispatch(loadProducts(data));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const loadProductsByPlatformRequest = (platform) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(
        `${API_URL}/api/products/platform/${platform}`,
      );
      dispatch(loadProductsByPlatform(data));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const searchProductsRequest = (searchPhrase) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(
        `${API_URL}/api/products/search/${searchPhrase}`,
      );
      dispatch(searchProducts(data));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

/* REDUCER */
export const productsReducer = (
  statePart = {
    list: [],
    listByPlatform: [],
    searchList: [],
    loading: false,
    error: null,
    success: false,
  },
  action,
) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, list: [...action.payload] };
    case LOAD_PRODUCTS_BY_PLATFORM:
      return { ...statePart, listByPlatform: [...action.payload] };
    case SEARCH_PRODUCTS:
      return { ...statePart, searchList: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, loading: true, error: null };
    case END_REQUEST:
      return { ...statePart, loading: false, error: null };
    case ERROR_REQUEST:
      return { ...statePart, loading: false, error: action.payload.message };
    default:
      return statePart;
  }
};

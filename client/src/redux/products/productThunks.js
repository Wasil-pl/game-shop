import { httpClient } from '../../api/httpClient';
import { API_URL } from '../../config';
import {
  startRequest,
  errorRequest,
  endRequest,
  loadProducts,
  loadProductById,
  loadProductsByPlatform,
  searchProducts,
} from './productActions';

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

export const loadProductByIdRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/products/${id}`);
      dispatch(loadProductById(data));
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

import { httpClient } from '../../api/httpClient';
import { httpClientFormData } from '../../api/httpClientFormData';
import { API_URL } from '../../config';
import {
  startRequest,
  errorRequest,
  endRequest,
  loadProducts,
  loadProductById,
  loadProductsByPlatform,
  searchProducts,
  addProduct,
  editProduct,
  activateProductSuccess,
  activateProductError,
  loadProductsIsActive,
  deleteProduct,
  addEditProductContentSuccess,
  addEditProductImagesSuccess,
  addEditProductContentError,
  addEditProductImagesError,
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

export const loadProductsIsActiveRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/products/isActive`);
      dispatch(loadProductsIsActive(data));
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

export const addProductContentRequest = (data) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const response = await httpClient.post(
        `${API_URL}/api/products/add`,
        data,
      );
      dispatch(addProduct(response));
      dispatch(addEditProductContentSuccess(response.id));
    } catch (error) {
      const action = addEditProductContentError({ message: error.message });
      dispatch(action);
    }
  };
};

export const addProductImagesRequest = (data, id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const response = await httpClientFormData.put(
        `${API_URL}/api/products/add/files/${id}`,
        data,
      );
      dispatch(editProduct(response));
      dispatch(addEditProductImagesSuccess(id));
    } catch (error) {
      const action = addEditProductImagesError({ message: error.message });
      dispatch(action);
    }
  };
};

export const addProductIsActiveRequest = (payload, id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const response = await httpClient.put(
        `${API_URL}/api/products/add/isActive/${id}`,
        payload,
      );
      dispatch(editProduct(response));
      dispatch(activateProductSuccess());
    } catch (error) {
      const action = activateProductError({ message: error.message });
      dispatch(action);
    }
  };
};

export const deleteProductRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.delete(
        `${API_URL}/api/products/delete/${id}`,
      );

      dispatch(deleteProduct(data.id));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const editProductContentRequest = (data, id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const response = await httpClient.put(
        `${API_URL}/api/products/update/${id}`,
        data,
      );
      dispatch(editProduct(response));
      dispatch(addEditProductContentSuccess());
    } catch (error) {
      const action = addEditProductContentError({ message: error.message });
      dispatch(action);
    }
  };
};

export const editProductImagesRequest = (data, id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const response = await httpClientFormData.put(
        `${API_URL}/api/products/update/files/${id}`,
        data,
      );
      dispatch(editProduct(response));
      dispatch(addEditProductImagesSuccess());
    } catch (error) {
      const action = addEditProductImagesError({ message: error.message });
      dispatch(action);
    }
  };
};

export const editProductIsActiveRequest = (payload, id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.put(
        `${API_URL}/api/products/update/isActive/${id}`,
        payload,
      );
      dispatch(editProduct(data));
      dispatch(activateProductSuccess());
    } catch (error) {
      const action = activateProductError({ message: error.message });
      dispatch(action);
    }
  };
};

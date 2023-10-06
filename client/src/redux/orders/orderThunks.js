import { httpClient } from '../../api/httpClient';
import { API_URL } from '../../config';
import {
  startRequest,
  errorRequest,
  endRequest,
  loadOrders,
  loadOrder,
  addOrderSuccess,
  addOrder,
  editOrderStatus,
  editOrderSuccess,
} from './orderActions';
import { removeAllProductsFromCart } from '../cart/cartActions';
import { loadProductsIsActiveRequest } from '../products/productThunks';

export const loadOrdersRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/orders`);
      dispatch(loadOrders(data));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const loadOrderRequest = (orderId) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/orders/${orderId}`);
      dispatch(loadOrder(data));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const addOrderRequest = (order) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      await httpClient.post(`${API_URL}/api/orders`, order);
      dispatch(endRequest());
      dispatch(addOrderSuccess());
      dispatch(loadProductsIsActiveRequest());
      dispatch(removeAllProductsFromCart());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const editOrderStatusRequest = (status, orderId) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.put(
        `${API_URL}/api/orders/${orderId}`,
        status,
      );
      dispatch(editOrderStatus(data));
      dispatch(editOrderSuccess());
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

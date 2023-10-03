import { httpClient } from '../../api/httpClient';
import { API_URL } from '../../config';
import {
  startRequest,
  errorRequest,
  endRequest,
  loadOrders,
  loadOrder,
  addOrderSuccess,
} from './orderActions';
import { removeAllProductsFromCart } from '../cart/cartActions';

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
      dispatch(addOrderSuccess());
      dispatch(endRequest());
      dispatch(removeAllProductsFromCart());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

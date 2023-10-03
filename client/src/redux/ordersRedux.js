import { httpClient } from '../api/httpClient';
import { API_URL } from '../config';
import { removeAllProductsFromCart } from './cartRedux';

/* SELECTORS */
export const getAllOrders = (state) => state.orders.list;
export const getSelectedOrder = (state) => state.orders.selectedOrder;

export const getLoadingState = (state) => state.orders.loading;
export const getErrorState = (state) => state.orders.error;
export const getSuccessState = (state) => state.orders.addOrderSuccess;

/* ACTIONS */
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const resetOrderState = () => ({
  type: RESET_ORDER_STATE,
});
export const addOrderSuccess = (payload) => ({
  payload,
  type: ADD_ORDER_SUCCESS,
});
export const loadOrders = (payload) => ({ payload, type: LOAD_ORDERS });
export const loadOrder = (payload) => ({ payload, type: LOAD_ORDER });

const createActionName = (name) => `app/orders/${name}`;
const START_REQUEST = createActionName('START_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const RESET_ORDER_STATE = createActionName('RESET_ORDER_STATE');
const ADD_ORDER_SUCCESS = createActionName('ADD_ORDER_SUCCESS');
const LOAD_ORDERS = createActionName('LOAD_ORDERS');
const LOAD_ORDER = createActionName('LOAD_ORDER');

/* THUNKS */
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

/* REDUCER */
export const ordersReducer = (
  statePart = {
    list: [],
    selectedOrder: {},
    loading: false,
    error: null,
    addOrderSuccess: false,
  },
  action,
) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return { ...statePart, list: [...action.payload] };
    case LOAD_ORDER:
      return {
        ...statePart,
        selectedOrder: action.payload,
        addOrderSuucess: true,
      };
    case ADD_ORDER_SUCCESS:
      return { ...statePart, addOrderSuccess: true };
    case START_REQUEST:
      return { ...statePart, loading: true, error: null };
    case END_REQUEST:
      return { ...statePart, loading: false, error: null };
    case ERROR_REQUEST:
      return { ...statePart, loading: false, error: action.payload.message };
    case RESET_ORDER_STATE:
      return { ...statePart, addOrderSuccess: false, error: null };
    default:
      return statePart;
  }
};

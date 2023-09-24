import { httpClient } from '../api/httpClient';
import { API_URL } from '../config';

/* SELECTORS */
export const getAllOrders = (state) => state.orders.list;

/* ACTIONS */
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const loadOrders = (payload) => ({ payload, type: LOAD_ORDERS });

const createActionName = (name) => `app/orders/${name}`;
const START_REQUEST = createActionName('START_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const LOAD_ORDERS = createActionName('LOAD_ORDERS');

/* THUNKS */
export const loadOrdersRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/orders`);
      dispatch(loadOrders(data));
      dispatch(endRequest());
      dispatch(endRequest());
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
    loading: false,
    error: null,
    success: false,
  },
  action,
) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return { ...statePart, list: [...action.payload] };
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

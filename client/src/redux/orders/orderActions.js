import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  RESET_ORDER_STATE,
  ADD_ORDER_SUCCESS,
  LOAD_ORDERS,
  LOAD_ORDER,
} from './orderActionTypes';

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const resetOrderState = () => ({ type: RESET_ORDER_STATE });
export const addOrderSuccess = (payload) => ({
  payload,
  type: ADD_ORDER_SUCCESS,
});
export const loadOrders = (payload) => ({ payload, type: LOAD_ORDERS });
export const loadOrder = (payload) => ({ payload, type: LOAD_ORDER });

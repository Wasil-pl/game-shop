import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  RESET_ORDER_STATE,
  ADD_ORDER_SUCCESS,
  LOAD_ORDERS,
  LOAD_ORDER,
} from './orderActionTypes';

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

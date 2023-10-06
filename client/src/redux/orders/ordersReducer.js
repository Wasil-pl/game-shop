import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  RESET_ORDER_STATE,
  ADD_ORDER_SUCCESS,
  LOAD_ORDERS,
  LOAD_ORDER,
  EDIT_ORDER_STATUS,
  ADD_ORDER,
  EDIT_ORDER_SUCCESS,
} from './orderActionTypes';

export const ordersReducer = (
  statePart = {
    list: [],
    selectedOrder: {},
    loading: false,
    error: null,
    addOrderSuccess: false,
    editOrderSuccess: false,
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
    case EDIT_ORDER_STATUS:
      return {
        ...statePart,
        list: statePart.list.map((order) =>
          order.id === action.payload.id ? action.payload : order,
        ),
      };
    case EDIT_ORDER_SUCCESS:
      return { ...statePart, editOrderSuccess: true };
    case ADD_ORDER:
      return {
        ...statePart,
        list: [...statePart.list, action.payload],
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
      return {
        ...statePart,
        addOrderSuccess: false,
        editOrderSuccess: false,
        error: null,
      };
    default:
      return statePart;
  }
};

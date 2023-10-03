import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_BY_PLATFORM,
  SEARCH_PRODUCTS,
  LOAD_PRODUCT,
} from './productActionTypes';

export const productsReducer = (
  statePart = {
    list: [],
    listByPlatform: [],
    searchList: [],
    selectedProduct: {},
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
    case LOAD_PRODUCT:
      return { ...statePart, selectedProduct: { ...action.payload } };
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

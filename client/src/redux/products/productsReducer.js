import { updateAddEditProductState } from '../../Utils/updateAddEditProductState';
import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_BY_PLATFORM,
  SEARCH_PRODUCTS,
  LOAD_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_CONTENT_SUCCESS,
  ADD_PRODUCT_CONTENT_ERROR,
  ADD_PRODUCT_ISACTIVE_ERROR,
  ADD_PRODUCT_ISACTIVE_SUCCESS,
  ADD_PRODUCT_IMAGES_ERROR,
  ADD_PRODUCT_IMAGES_SUCCESS,
  RESET_PRODUCT_STATES,
  EDIT_PRODUCT,
} from './productActionTypes';

export const productsReducer = (
  statePart = {
    success: false,
    loading: false,
    error: null,
    list: [],
    listByPlatform: [],
    searchList: [],
    selectedProduct: {},
    addedProductId: null,
    addProductStates: {
      content: {
        success: false,
        error: null,
      },
      images: {
        success: false,
        error: null,
      },
      activate: {
        success: false,
        error: null,
      },
    },
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
      return {
        ...statePart,
        loading: true,
        error: null,
        addProductStates: {
          content: {
            success: false,
            error: null,
          },
          images: {
            success: false,
            error: null,
          },
          activate: {
            success: false,
            error: null,
          },
        },
      };
    case END_REQUEST:
      return { ...statePart, loading: false, error: null };
    case ERROR_REQUEST:
      return { ...statePart, loading: false, error: action.payload.message };
    case ADD_PRODUCT:
      return {
        ...statePart,
        list: [...statePart.list, action.payload],
      };
    case EDIT_PRODUCT:
      return {
        ...statePart,
        list: statePart.list.map((product) =>
          product._id === action.payload._id ? action.payload : product,
        ),
      };
    case ADD_PRODUCT_CONTENT_SUCCESS:
      return updateAddEditProductState({
        state: statePart,
        operation: 'content',
        success: true,
        error: null,
        productId: action.payload,
      });
    case ADD_PRODUCT_CONTENT_ERROR:
      return updateAddEditProductState({
        state: statePart,
        operation: 'content',
        success: false,
        error: action.payload.message,
      });
    case ADD_PRODUCT_IMAGES_SUCCESS:
      return updateAddEditProductState({
        state: statePart,
        operation: 'images',
        success: true,
        error: null,
        productId: action.payload,
      });
    case ADD_PRODUCT_IMAGES_ERROR:
      return updateAddEditProductState({
        state: statePart,
        operation: 'images',
        success: false,
        error: action.payload.message,
      });
    case ADD_PRODUCT_ISACTIVE_SUCCESS:
      return updateAddEditProductState({
        state: statePart,
        operation: 'activate',
        success: true,
        error: null,
        productId: action.payload,
      });
    case ADD_PRODUCT_ISACTIVE_ERROR:
      return updateAddEditProductState({
        state: statePart,
        operation: 'activate',
        success: false,
        error: action.payload.message,
      });
    case RESET_PRODUCT_STATES:
      return {
        ...statePart,
        error: null,
        addProductStates: {
          content: {
            success: false,
            error: null,
          },
          images: {
            success: false,
            error: null,
          },
          activate: {
            success: false,
            error: null,
          },
        },
      };
    default:
      return statePart;
  }
};

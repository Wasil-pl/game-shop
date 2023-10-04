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
  ACTIVATE_PRODUCT_ERROR,
  ACTIVATE_PRODUCT_SUCCESS,
  ADD_PRODUCT_IMAGES_ERROR,
  ADD_PRODUCT_IMAGES_SUCCESS,
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
    case ADD_PRODUCT_CONTENT_SUCCESS:
      return updateAddEditProductState(
        statePart,
        'content',
        true,
        null,
        action.payload,
      );
    case ADD_PRODUCT_CONTENT_ERROR:
      return updateAddEditProductState(
        statePart,
        'content',
        false,
        action.payload.message,
      );
    case ADD_PRODUCT_IMAGES_SUCCESS:
      return updateAddEditProductState(statePart, 'images', true, null);
    case ADD_PRODUCT_IMAGES_ERROR:
      return updateAddEditProductState(
        statePart,
        'images',
        false,
        action.payload.message,
      );
    case ACTIVATE_PRODUCT_SUCCESS:
      return updateAddEditProductState(statePart, 'activate', true, null);
    case ACTIVATE_PRODUCT_ERROR:
      return updateAddEditProductState(
        statePart,
        'activate',
        false,
        action.payload.message,
      );
    default:
      return statePart;
  }
};

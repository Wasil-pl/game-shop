const createActionName = (name) => `app/products/${name}`;
export const START_REQUEST = createActionName('START_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCTS_ISACTIVE = createActionName(
  'LOAD_PRODUCTS_ISACTIVE',
);
export const LOAD_PRODUCTS_BY_PLATFORM = createActionName(
  'LOAD_PRODUCTS_BY_PLATFORM',
);
export const SEARCH_PRODUCTS = createActionName('SEARCH_PRODUCTS');
export const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');
export const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
export const ADD_EDIT_PRODUCT_CONTENT_SUCCESS = createActionName(
  'ADD_EDIT_PRODUCT_CONTENT_SUCCESS',
);
export const ADD_EDIT_PRODUCT_CONTENT_ERROR = createActionName(
  'ADD_EDIT_PRODUCT_CONTENT_ERROR',
);
export const ADD_EDIT_PRODUCT_IMAGES_SUCCESS = createActionName(
  'ADD_EDIT_PRODUCT_IMAGES_SUCCESS',
);
export const ADD_EDIT_PRODUCT_IMAGES_ERROR = createActionName(
  'ADD_EDIT_PRODUCT_IMAGES_ERROR',
);
export const ADD_EDIT_PRODUCT_ISACTIVE_SUCCESS = createActionName(
  'ADD_EDIT_PRODUCT_ISACTIVE_SUCCESS',
);
export const ADD_EDIT_PRODUCT_ISACTIVE_ERROR = createActionName(
  'ADD_EDIT_PRODUCT_ISACTIVE_ERROR',
);
export const RESET_PRODUCT_STATES = createActionName('RESET_PRODUCT_STATES');

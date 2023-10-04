const createActionName = (name) => `app/products/${name}`;
export const START_REQUEST = createActionName('START_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCTS_BY_PLATFORM = createActionName(
  'LOAD_PRODUCTS_BY_PLATFORM',
);
export const SEARCH_PRODUCTS = createActionName('SEARCH_PRODUCTS');
export const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const ADD_PRODUCT_CONTENT_SUCCESS = createActionName(
  'ADD_PRODUCT_CONTENT_SUCCESS',
);
export const ADD_PRODUCT_CONTENT_ERROR = createActionName(
  'ADD_PRODUCT_CONTENT_ERROR',
);
export const ADD_PRODUCT_IMAGES_SUCCESS = createActionName(
  'ADD_PRODUCT_IMAGES_SUCCESS',
);
export const ADD_PRODUCT_IMAGES_ERROR = createActionName(
  'ADD_PRODUCT_IMAGES_ERROR',
);
export const ACTIVATE_PRODUCT_SUCCESS = createActionName(
  'ACTIVATE_PRODUCT_SUCCESS',
);
export const ACTIVATE_PRODUCT_ERROR = createActionName(
  'ACTIVATE_PRODUCT_ERROR',
);

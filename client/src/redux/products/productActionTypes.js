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

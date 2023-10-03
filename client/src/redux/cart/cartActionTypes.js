const createActionName = (name) => `app/cart/${name}`;

export const ADD_PRODUCT_TO_CART = createActionName('ADD_PRODUCT_TO_CART');
export const REMOVE_PRODUCT_FROM_CART = createActionName(
  'REMOVE_PRODUCT_FROM_CART',
);
export const REMOVE_ALL_PRODUCTS_FROM_CART = createActionName(
  'REMOVE_ALL_PRODUCTS_FROM_CART',
);
export const INCREASE_PRODUCT_QUANTITY_IN_CART = createActionName(
  'INCREASE_PRODUCT_QUANTITY_IN_CART',
);
export const DECREASE_PRODUCT_QUANTITY_IN_CART = createActionName(
  'DECREASE_PRODUCT_QUANTITY_IN_CART',
);

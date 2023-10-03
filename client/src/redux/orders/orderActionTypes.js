const createActionName = (name) => `app/orders/${name}`;
export const START_REQUEST = createActionName('START_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_ORDER_STATE = createActionName('RESET_ORDER_STATE');
export const ADD_ORDER_SUCCESS = createActionName('ADD_ORDER_SUCCESS');
export const LOAD_ORDERS = createActionName('LOAD_ORDERS');
export const LOAD_ORDER = createActionName('LOAD_ORDER');

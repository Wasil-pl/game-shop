const createActionName = (name) => `app/products/${name}`;
export const LOAD_USERS = createActionName('LOAD_USERS');
export const LOAD_USER = createActionName('LOAD_USER');
export const LOGOUT_USER = createActionName('LOGOUT_USER');
export const LOGIN_USER = createActionName('LOGIN_USER');
export const START_USER_REQUEST = createActionName('START_USER_REQUEST');
export const ERROR_USER_REQUEST = createActionName('ERROR_USER_REQUEST');
export const ERROR_USER_REGISTER_REQUEST = createActionName(
  'ERROR_USER_REGISTER_REQUEST',
);
export const END_USER_REQUEST = createActionName('END_USER_REQUEST');
export const END_USER_REGISTER_REQUEST = createActionName(
  'END_USER_REGISTER_REQUEST',
);
export const END_USER_LOGIN_REQUEST = createActionName(
  'END_USER_LOGIN_REQUEST',
);
export const RESET_USER_STATE = createActionName('RESET_USER_STATE');
export const GET_USER_ROLE = createActionName('GET_USER_ROLE');

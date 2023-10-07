import {
  LOAD_USERS,
  LOAD_USER,
  LOGOUT_USER,
  LOGIN_USER,
  START_USER_REQUEST,
  ERROR_USER_REQUEST,
  ERROR_USER_REGISTER_REQUEST,
  END_USER_REQUEST,
  RESET_USER_STATE,
  END_USER_REGISTER_REQUEST,
  END_USER_LOGIN_REQUEST,
  GET_USER_ROLE,
} from './userActionTypes';

export const loadUsers = (payload) => ({ payload, type: LOAD_USERS });
export const loadUser = (payload) => ({ payload, type: LOAD_USER });
export const logoutUser = (payload) => ({ payload, type: LOGOUT_USER });
export const loginUser = (payload) => ({ payload, type: LOGIN_USER });
export const getUserRole = (payload) => ({ payload, type: GET_USER_ROLE });
export const startUserRequest = (payload) => ({
  payload,
  type: START_USER_REQUEST,
});
export const errorUserRequest = (payload) => ({
  payload,
  type: ERROR_USER_REQUEST,
});
export const errorUserRegisterRequest = (payload) => ({
  payload,
  type: ERROR_USER_REGISTER_REQUEST,
});
export const endUserRegisterRequest = (payload) => ({
  payload,
  type: END_USER_REGISTER_REQUEST,
});
export const endUserLoginRequest = (payload) => ({
  payload,
  type: END_USER_LOGIN_REQUEST,
});
export const endUserRequest = (payload) => ({
  payload,
  type: END_USER_REQUEST,
});
export const resetUserState = (payload) => ({
  payload,
  type: RESET_USER_STATE,
});

import { httpClient } from '../api/httpClient';
import { API_URL } from '../config';

/* SELECTORS */
export const getAllUsers = (state) => state.users.list;
export const getUser = (state) => state.users.user;

export const getLoggedState = (state) => state.users.isLogged;
export const getUsersLoadingState = (state) => state.users.loading;
export const getUsersErrorState = (state) => state.users.error;
export const getSuccessState = (state) => state.users.success;
export const getRegisterErrorState = (state) => state.users.registerError;

/* ACTIONS */
export const loadUsers = (payload) => ({ payload, type: LOAD_USERS });
export const loadUser = (payload) => ({ payload, type: LOAD_USER });
export const logoutUser = (payload) => ({ payload, type: LOGOUT_USER });
export const loginUser = (payload) => ({ payload, type: LOGIN_USER });

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
export const endUserRequest = (payload) => ({
  payload,
  type: END_USER_REQUEST,
});
export const resetUserState = (payload) => ({
  payload,
  type: RESET_USER_STATE,
});

const createActionName = (name) => `app/products/${name}`;
const LOAD_USERS = createActionName('LOAD_USERS');
const LOAD_USER = createActionName('LOAD_USER');
const LOGOUT_USER = createActionName('LOGOUT_USER');
const LOGIN_USER = createActionName('LOGIN_USER');

const START_USER_REQUEST = createActionName('START_USER_REQUEST');
const ERROR_USER_REQUEST = createActionName('ERROR_USER_REQUEST');
const ERROR_USER_REGISTER_REQUEST = createActionName(
  'ERROR_USER_REGISTER_REQUEST',
);
const END_USER_REQUEST = createActionName('END_USER_REQUEST');
const RESET_USER_STATE = createActionName('RESET_USER_STATE');

/* THUNKS */
export const loadUsersRequest = () => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/users`);
      dispatch(loadUsers(data));
      dispatch(endUserRequest());
      dispatch(resetUserState());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const loadUserRequest = (userId) => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/users/${userId}`);
      dispatch(loadUser(data));
      dispatch(endUserRequest());
      dispatch(resetUserState());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const loginUserRequest = (user) => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      await httpClient.post(`${API_URL}/api/auth/login`, user);
      dispatch(loginUser());
      dispatch(endUserRequest());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const registerUserRequest = (user) => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      await httpClient.post(`${API_URL}/api/auth/register`, user);
      dispatch(endUserRequest());
    } catch (error) {
      const action = errorUserRegisterRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const checkUserSession = () => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      const response = await httpClient.get(`${API_URL}/api/auth/isLogged`);

      const { isValid } = response;

      if (isValid) {
        dispatch(loginUser());
      }

      dispatch(endUserRequest());
      dispatch(resetUserState());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const logoutUserRequest = () => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      await httpClient.delete(`${API_URL}/api/auth/logout`);
      dispatch(logoutUser());
      dispatch(endUserRequest());
      dispatch(resetUserState());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

/* REDUCER */
export const usersReducer = (
  statePart = {
    list: [],
    user: {},
    loading: false,
    error: null,
    success: false,
    registerError: null,
    isLogged: false,
  },
  action,
) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...statePart, list: [...action.payload] };
    case LOAD_USER:
      return { ...statePart, user: action.payload };
    case LOGOUT_USER:
      return { ...statePart, user: {}, isLogged: false };
    case LOGIN_USER:
      return { ...statePart, isLogged: true };
    case START_USER_REQUEST:
      return { ...statePart, loading: true, error: null };
    case END_USER_REQUEST:
      return { ...statePart, loading: false, error: null, success: true };
    case ERROR_USER_REQUEST:
      return { ...statePart, loading: false, error: action.payload.message };
    case ERROR_USER_REGISTER_REQUEST:
      return {
        ...statePart,
        loading: false,
        registerError: action.payload.message,
      };
    case RESET_USER_STATE:
      return {
        ...statePart,
        loading: false,
        error: null,
        registerError: null,
        success: false,
      };
    default:
      return statePart;
  }
};

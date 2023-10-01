import { httpClient } from '../api/httpClient';
import { API_URL } from '../config';

/* SELECTORS */
export const getAllUsers = (state) => state.users.list;
export const getUser = (state) => state.users.user;

export const getLoggedState = (state) => state.users.logged;
export const getUsersLoadingState = (state) => state.users.loading;
export const getUsersErrorState = (state) => state.users.error;

/* ACTIONS */
export const loadUsers = (payload) => ({ payload, type: LOAD_USERS });
export const loadUser = (payload) => ({ payload, type: LOAD_USER });
export const logoutUser = (payload) => ({ payload, type: LOGOUT_USER });

export const startUserRequest = (payload) => ({
  payload,
  type: START_USER_REQUEST,
});
export const errorUserRequest = (payload) => ({
  payload,
  type: ERROR_USER_REQUEST,
});
export const endUserRequest = (payload) => ({
  payload,
  type: END_USER_REQUEST,
});

const createActionName = (name) => `app/products/${name}`;
const LOAD_USERS = createActionName('LOAD_USERS');
const LOAD_USER = createActionName('LOAD_USER');
const LOGOUT_USER = createActionName('LOGOUT_USER');

const START_USER_REQUEST = createActionName('START_USER_REQUEST');
const ERROR_USER_REQUEST = createActionName('ERROR_USER_REQUEST');
const END_USER_REQUEST = createActionName('END_USER_REQUEST');

/* THUNKS */
export const loadUsersRequest = () => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/users`);
      dispatch(loadUsers(data));
      dispatch(endUserRequest());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const loadUserRequest = () => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/users`);
      dispatch(loadUser(data));
      dispatch(endUserRequest());
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
      const data = await httpClient.post(`${API_URL}/api/auth/login`, user);
      dispatch(loadUserRequest(data));
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
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
        dispatch(loadUserRequest());
      }
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
    logged: false,
  },
  action,
) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...statePart, list: [...action.payload] };
    case LOAD_USER:
      return { ...statePart, user: action.payload, logged: true };
    case LOGOUT_USER:
      return { ...statePart, user: {}, logged: false };
    case START_USER_REQUEST:
      return { ...statePart, loading: true, error: null };
    case END_USER_REQUEST:
      return { ...statePart, loading: false, error: null };
    case ERROR_USER_REQUEST:
      return { ...statePart, loading: false, error: action.payload.message };
    default:
      return statePart;
  }
};

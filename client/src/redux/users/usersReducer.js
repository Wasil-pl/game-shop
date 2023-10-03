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
} from './userActionTypes';

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

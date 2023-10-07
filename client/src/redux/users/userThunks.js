import { httpClient } from '../../api/httpClient';
import { API_URL } from '../../config';
import {
  loadUsers,
  loadUser,
  loginUser,
  logoutUser,
  startUserRequest,
  errorUserRequest,
  errorUserRegisterRequest,
  endUserRequest,
  endUserLoginRequest,
  getUserRole,
} from './userActions';

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
      const data = await httpClient.get(`${API_URL}/api/users/user`);
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
      await httpClient.post(`${API_URL}/api/auth/login`, user);
      dispatch(loginUser());
      dispatch(getUserRoleRequest());
      dispatch(endUserLoginRequest());
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
      dispatch(endUserLoginRequest());
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
        dispatch(getUserRoleRequest());
      }

      dispatch(endUserRequest());
    } catch (error) {
      const action = errorUserRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const getUserRoleRequest = () => {
  return async (dispatch) => {
    dispatch(startUserRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/users/role`);
      dispatch(getUserRole(data));
      dispatch(endUserRequest());
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

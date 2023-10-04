export const getAllUsers = (state) => state.users.list;
export const getUser = (state) => state.users.user;
export const getLoggedState = (state) => state.users.isLogged;
export const getUsersLoadingState = (state) => state.users.loading;
export const getUsersErrorState = (state) => state.users.error;
export const getLoginSuccessState = (state) => state.users.loginSuccess;
export const getRegisterSuccessState = (state) => state.users.registerSuccess;
export const getRegisterErrorState = (state) => state.users.registerError;

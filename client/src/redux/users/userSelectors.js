export const getAllUsers = (state) => state.users.list;
export const getUser = (state) => state.users.user;
export const getLoggedState = (state) => state.users.isLogged;
export const getUsersLoadingState = (state) => state.users.loading;
export const getUsersErrorState = (state) => state.users.error;
export const getSuccessState = (state) => state.users.success;
export const getRegisterErrorState = (state) => state.users.registerError;

export const getAllOrders = (state) => state.orders.list;
export const getSelectedOrder = (state) => state.orders.selectedOrder;
export const getLoadingState = (state) => state.orders.loading;
export const getErrorState = (state) => state.orders.error;
export const getSuccessState = (state) => state.orders.addOrderSuccess;
export const getEditOrderSuccessState = (state) =>
  state.orders.editOrderSuccess;

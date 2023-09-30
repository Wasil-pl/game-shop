export const updateIncreaseTotalPrice = (state, productPrice) => {
  return state.totalPrice + productPrice;
};

export const updateIncreaseTotalQuantity = (state) => {
  return state.totalQuantity + 1;
};

export const updateDecreaseTotalPrice = (state, productPrice) => {
  return state.totalPrice - productPrice;
};

export const updateDecreaseTotalQuantity = (state) => {
  return state.totalQuantity - 1;
};

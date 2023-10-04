export const updateAddEditProductState = (
  state,
  operation,
  success,
  error,
  productId = null,
) => {
  return {
    ...state,
    loading: false,
    addedProductId: productId,
    addProductStates: {
      ...state.addProductStates,
      [operation]: {
        success,
        error,
      },
    },
  };
};

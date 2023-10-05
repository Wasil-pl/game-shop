export const updateAddEditProductState = ({
  state,
  operation,
  success,
  error,
  productId,
}) => {
  return {
    ...state,
    loading: false,
    addedProductId: productId,
    addProductStates: {
      ...state.addProductStates,
      [operation]: {
        success: success,
        error: error,
      },
    },
  };
};

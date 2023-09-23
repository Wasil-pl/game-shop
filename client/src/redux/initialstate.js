const initialState = {
  products: {
    success: false,
    loading: false,
    error: null,
    list: [],
    selectedProduct: null,
    searchResult: [],
  },

  user: {
    loading: false,
    error: null,
    user: null,
  },

  order: {
    success: false,
    loading: false,
    error: null,
    list: [],
    selectedOrder: null,
  },

  banner: {
    list: [],
  },
};

export default initialState;

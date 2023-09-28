const initialState = {
  products: {
    success: false,
    loading: false,
    error: null,
    list: [],
    listByPlatform: [],
    searchList: [],
  },

  users: {
    loading: false,
    error: null,
    user: null,
    list: [],
  },

  orders: {
    success: false,
    loading: false,
    error: null,
    list: [],
    selectedOrder: null,
  },

  banner: {
    list: [],
    loading: false,
    error: null,
  },
};

export default initialState;

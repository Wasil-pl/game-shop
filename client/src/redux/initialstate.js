const initialState = {
  products: {
    success: false,
    loading: false,
    error: null,
    list: [],
    listByPlatform: [],
    searchList: [],
    selectedProduct: {},
  },

  users: {
    loading: false,
    error: null,
    isLogged: false,
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

  cart: {
    products: JSON.parse(localStorage.getItem('cartProducts')) || [],
  },
};

export default initialState;

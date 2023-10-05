const initialState = {
  products: {
    success: false,
    loading: false,
    error: null,
    activeProducts: [],
    all: [],
    listByPlatform: [],
    searchList: [],
    selectedProduct: {},
    addedProductId: null,
    addProductStates: {
      content: {
        success: false,
        error: null,
      },
      images: {
        success: false,
        error: null,
      },
      activate: {
        success: false,
        error: null,
      },
    },
  },

  users: {
    loading: false,
    error: null,
    isLogged: false,
    loginSuccess: false,
    registerSuccess: false,
    registerError: null,
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

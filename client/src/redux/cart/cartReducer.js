import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
} from './cartActionTypes';

export const cartReducer = (statePart = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const existingProduct = statePart.products.find(
        (product) => product.productId === action.payload,
      );
      if (!existingProduct) {
        newState = {
          ...statePart,
          products: [
            ...statePart.products,
            { productId: action.payload, quantity: 1 },
          ],
        };
      } else {
        newState = {
          ...statePart,
          products: statePart.products.map((product) =>
            product.productId === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        };
      }
      localStorage.setItem('cartProducts', JSON.stringify(newState.products));
      return newState;
    }
    case REMOVE_PRODUCT_FROM_CART: {
      newState = {
        ...statePart,
        products: statePart.products.filter(
          (product) => product.productId !== action.payload,
        ),
      };
      localStorage.setItem('cartProducts', JSON.stringify(newState.products));
      return newState;
    }
    case REMOVE_ALL_PRODUCTS_FROM_CART: {
      localStorage.removeItem('cartProducts');
      return {
        ...statePart,
        products: [],
      };
    }
    case INCREASE_PRODUCT_QUANTITY_IN_CART: {
      newState = {
        ...statePart,
        products: statePart.products.map((product) =>
          product.productId === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };
      localStorage.setItem('cartProducts', JSON.stringify(newState.products));
      return newState;
    }
    case DECREASE_PRODUCT_QUANTITY_IN_CART: {
      newState = {
        ...statePart,
        products: statePart.products.map((product) =>
          product.productId === action.payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      };
      localStorage.setItem('cartProducts', JSON.stringify(newState.products));
      return newState;
    }
    default:
      return statePart;
  }
};

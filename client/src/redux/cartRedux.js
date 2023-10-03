import { createSelector } from 'reselect';
import { getAllProducts } from './productsRedux';

/* selectors */
export const getAllCartProducts = ({ cart }) => cart.products;
export const getTotalQuantity = ({ cart }) =>
  cart.products.map((product) => product.quantity).reduce((a, b) => a + b, 0);

export const getDetailedCartProducts = createSelector(
  [getAllProducts, getAllCartProducts],
  (allProducts, cartProducts) => {
    return cartProducts.map((cartProduct) => {
      const fullProductInfo = allProducts.find(
        (product) => product.id === cartProduct.productId,
      );
      return {
        ...cartProduct,
        ...fullProductInfo,
      };
    });
  },
);

const createActionName = (name) => `app/cart/${name}`;

/* action types */
const ADD_PRODUCT_TO_CART = createActionName('ADD_PRODUCT_TO_CART');
const REMOVE_PRODUCT_FROM_CART = createActionName('REMOVE_PRODUCT_FROM_CART');
const REMOVE_ALL_PRODUCTS_FROM_CART = createActionName(
  'REMOVE_ALL_PRODUCTS_FROM_CART',
);
const INCREASE_PRODUCT_QUANTITY_IN_CART = createActionName(
  'INCREASE_PRODUCT_QUANTITY_IN_CART',
);
const DECREASE_PRODUCT_QUANTITY_IN_CART = createActionName(
  'DECREASE_PRODUCT_QUANTITY_IN_CART',
);

/* action creators */
export const addProductToCart = (payload) => ({
  payload,
  type: ADD_PRODUCT_TO_CART,
});
export const removeProductFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT_FROM_CART,
});
export const removeAllProductsFromCart = () => ({
  type: REMOVE_ALL_PRODUCTS_FROM_CART,
});
export const increaseProductQuantityInCart = (payload) => ({
  payload,
  type: INCREASE_PRODUCT_QUANTITY_IN_CART,
});
export const decreaseProductQuantityInCart = (payload) => ({
  payload,
  type: DECREASE_PRODUCT_QUANTITY_IN_CART,
});

/* reducer */
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

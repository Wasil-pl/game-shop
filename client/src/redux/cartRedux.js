import {
  updateDecreaseTotalPrice,
  updateDecreaseTotalQuantity,
  updateIncreaseTotalPrice,
  updateIncreaseTotalQuantity,
} from '../Utils/cartReduxFunctions';

/* selectors */
export const getAllCartProducts = ({ cart }) => cart.products;
export const getTotalPrice = ({ cart }) => cart.totalPrice;
export const getTotalQuantity = ({ cart }) => cart.totalQuantity;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

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
export const cartReducer = (
  statePart = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  action,
) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const existingProduct = statePart.products.find(
        (product) => product.id === action.payload.id,
      );
      const productPrice = Number(
        action.payload.salePrice || action.payload.price,
      );
      if (!existingProduct) {
        return {
          ...statePart,
          products: [
            ...statePart.products,
            {
              ...action.payload,
              totalPrice: productPrice,
              quantity: +1,
            },
          ],
          totalPrice: updateIncreaseTotalPrice(statePart, productPrice),
          totalQuantity: updateIncreaseTotalQuantity(statePart),
        };
      }
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                totalPrice: productPrice * (product.quantity + 1),
                quantity: product.quantity + 1,
              }
            : product,
        ),
        totalPrice: updateIncreaseTotalPrice(statePart, productPrice),
        totalQuantity: updateIncreaseTotalQuantity(statePart),
      };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const removedProduct = statePart.products.find(
        (product) => product.id === action.payload.id,
      );
      return {
        ...statePart,
        products: statePart.products.filter(
          (product) => product.id !== action.payload.id,
        ),
        totalPrice: statePart.totalPrice - removedProduct.totalPrice,
        totalQuantity: statePart.totalQuantity - removedProduct.quantity,
      };
    }

    case REMOVE_ALL_PRODUCTS_FROM_CART: {
      return {
        ...statePart,
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
    }

    case INCREASE_PRODUCT_QUANTITY_IN_CART: {
      const productPrice = Number(
        action.payload.salePrice || action.payload.price,
      );
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                totalPrice: productPrice * (product.quantity + 1),
                quantity: product.quantity + 1,
              }
            : product,
        ),
        totalPrice: updateIncreaseTotalPrice(statePart, productPrice),
        totalQuantity: updateIncreaseTotalQuantity(statePart),
      };
    }

    case DECREASE_PRODUCT_QUANTITY_IN_CART: {
      const productPrice = Number(
        action.payload.salePrice || action.payload.price,
      );
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                totalPrice: productPrice * (product.quantity - 1),
                quantity: product.quantity - 1,
              }
            : product,
        ),
        totalPrice: updateDecreaseTotalPrice(statePart, productPrice),
        totalQuantity: updateDecreaseTotalQuantity(statePart),
      };
    }
    default:
      return statePart;
  }
};

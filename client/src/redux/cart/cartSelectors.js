import { createSelector } from 'reselect';
import { getAllActiveProducts } from '../products/productSelectors';

export const getAllCartProducts = ({ cart }) => cart.products;
export const getTotalQuantity = ({ cart }) =>
  cart.products.map((product) => product.quantity).reduce((a, b) => a + b, 0);

export const getDetailedCartProducts = createSelector(
  [getAllActiveProducts, getAllCartProducts],
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

export const isProductInCart = (state, productId) =>
  state.cart.products.some((product) => product.productId === productId);

export const getCartProductQuantity = (state, productId) =>
  state.cart.products.find((product) => product.productId === productId)
    ?.quantity;

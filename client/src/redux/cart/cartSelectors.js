import { createSelector } from 'reselect';
import { getAllProducts } from '../products/productSelectors';

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

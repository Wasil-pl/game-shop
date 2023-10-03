import { createSelector } from 'reselect';

export const getAllProducts = (state) => state.products.list;
export const getProductsByPlatform = (state) => state.products.listByPlatform;
export const getProductsBySearchPhrase = (state) => state.products.searchList;
export const getProductById = (state) => state.products.selectedProduct;
export const getAllActiveProducts = createSelector(getAllProducts, (products) =>
  products.filter((product) => product.isActive),
);
export const getSaleProducts = createSelector(
  getAllActiveProducts,
  (products) => products.filter((product) => product.salePrice),
);
export const getNewProducts = createSelector(getAllActiveProducts, (products) =>
  products
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10),
);
export const getErrorState = (state) => state.products.error;
export const getLoadingState = (state) => state.products.loading;

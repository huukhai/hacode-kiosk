export const ADD_PRODUCT = 'ADD_PRODUCT';
export const PUSH_ALL_PRODUCTS = 'PUSH_ALL_PRODUCTS';

export function addProduct(product, category) {
  return {
    type: ADD_PRODUCT,
    data: { product, category }
  };
}

export function pushAllProducts(products, category) {
  return {
    type: PUSH_ALL_PRODUCTS,
    data: { products, category }
  };
}

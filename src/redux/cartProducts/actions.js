import { CART_PRODUCT_ADD, CART_PRODUCT_OUT } from "./actionTypes";

export const cart_products_out = (product) => {
  return {
    type: CART_PRODUCT_OUT,
    payload: product,
  };
};

export const cart_products_add = (product) => {
  return {
    type: CART_PRODUCT_ADD,
    payload: product,
  };
};

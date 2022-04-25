import { ActionTypes } from "../constants/action-types";

const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (productId) => {
  return {
    type: SELECTED_PRODUCT,
    payload: productId
  };
};

export const removeSelectedProduct = (productId) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: productId
  };
};

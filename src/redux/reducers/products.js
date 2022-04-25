import { ActionTypes } from "../constants/action-types";

const { SET_PRODUCTS } = ActionTypes;

const initialState = [{ id: 1, product: "Laptop", category: "digital" }];

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

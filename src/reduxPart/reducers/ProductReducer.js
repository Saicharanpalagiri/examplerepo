import { ActionTypes } from "../../constants/productConstants";
const intialState = {
  products: [],
};
const initialState2={
  addCart:false,
}

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState2, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return { ...state, addCart: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
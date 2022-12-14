import { combineReducers } from "redux";
import { cartReducer, productsReducer } from "./ProductReducer";
import { selectedProductsReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    addCart:cartReducer,
    product: selectedProductsReducer,
  });
  export default reducers;
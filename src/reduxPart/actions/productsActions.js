import { ActionTypes } from "../../constants/productConstants";

export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  };

  export const setAddCart=(item)=>{
    return{
      type:ActionTypes.SET_CART,
      payload:item
      
    }
  }
  
  export const selectedProduct = (product) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };
  export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };
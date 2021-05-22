import { Product } from "../constants/productConstants.js";
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case Product.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case Product.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case Product.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case Product.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case Product.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case Product.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

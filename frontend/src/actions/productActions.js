import { Product } from "../constants/productConstants.js";
import axios from "axios";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: Product.PRODUCT_LIST_REQUEST });
    axios
      .get("/api/products")
      .then((res) => {
        dispatch({ type: Product.PRODUCT_LIST_SUCCESS, payload: res.data });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        console.log("Error in fetching ", reason);
        dispatch({
          type: Product.PRODUCT_LIST_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (error) {}
};

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: Product.PRODUCT_DETAILS_REQUEST });
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        dispatch({ type: Product.PRODUCT_DETAILS_SUCCESS, payload: res.data });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        console.log("Error in fetching ", reason);
        dispatch({
          type: Product.PRODUCT_DETAILS_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (error) {}
};

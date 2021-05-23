import axios from "axios";
import { Cart } from "../constants/cartConstants";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  axios
    .get(`/api/products/${id}`)
    .then((res) => {
      const {
        data: { _id, image, price, countInStock, name },
      } = res;
      dispatch({
        type: Cart.CART_ADD_ITEM,
        payload: {
          product: _id,
          image,
          price,
          countInStock,
          name,
          qty,
        },
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    })
    .catch((reason) => {
      console.log("error from cartAction fetch", reason);
    });
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: Cart.CART_REMOVE_ITEM, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

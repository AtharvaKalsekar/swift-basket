import { Product } from "../constants/productConstants.js";
import axios from "axios";

export const productListAction =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: Product.PRODUCT_LIST_REQUEST });
      axios
        .get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)
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

export const deleteProductAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: Product.PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .delete(`/api/products/${id}`, config)
      .then((res) => {
        dispatch({ type: Product.PRODUCT_DELETE_SUCCESS, payload: res.data });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        dispatch({
          type: Product.PRODUCT_DELETE_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (error) {}
};

export const createProductAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: Product.PRODUCT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    axios
      .post(`/api/products`, config)
      .then((res) => {
        dispatch({ type: Product.PRODUCT_CREATE_SUCCESS, payload: res.data });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;

        dispatch({
          type: Product.PRODUCT_CREATE_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (error) {}
};

export const updateProductAction = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: Product.PRODUCT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    axios
      .put(`/api/products/${product._id}`, product, config)
      .then((res) => {
        dispatch({ type: Product.PRODUCT_UPDATE_SUCCESS, payload: res.data });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;

        dispatch({
          type: Product.PRODUCT_UPDATE_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (error) {}
};

export const reviewProductAction =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: Product.PRODUCT_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      axios
        .post(`/api/products/${productId}/review`, review, config)
        .then((res) => {
          dispatch({ type: Product.PRODUCT_REVIEW_SUCCESS, payload: res.data });
        })
        .catch((reason) => {
          const {
            response: {
              data: { message },
            },
          } = reason;

          dispatch({
            type: Product.PRODUCT_REVIEW_FAIL,
            payload: message ? message : "no err msg",
          });
        });
    } catch (error) {}
  };

export const topProductsAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: Product.PRODUCT_TOP_REQUEST });

    axios
      .get(`/api/products/top`)
      .then((res) => {
        dispatch({ type: Product.PRODUCT_TOP_SUCCESS, payload: res.data });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;

        dispatch({
          type: Product.PRODUCT_TOP_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (error) {}
};

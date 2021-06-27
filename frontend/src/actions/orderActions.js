import axios from "axios";
import { Order } from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Order.ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log("update prod red -> ", user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .post(`/api/orders`, order, config)
      .then((res) => {
        dispatch({
          type: Order.ORDER_CREATE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        dispatch({
          type: Order.ORDER_CREATE_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Order.ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log("update prod red -> ", user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .get(`/api/orders/${id}`, config)
      .then((res) => {
        dispatch({
          type: Order.ORDER_DETAILS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        dispatch({
          type: Order.ORDER_DETAILS_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Order.ORDER_PAY_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      // console.log("update prod red -> ", user);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      axios
        .put(`/api/orders/${orderId}/pay`, paymentResult, config)
        .then((res) => {
          dispatch({
            type: Order.ORDER_PAY_SUCCESS,
            payload: res.data,
          });
        })
        .catch((reason) => {
          const {
            response: {
              data: { message },
            },
          } = reason;
          dispatch({
            type: Order.ORDER_PAY_FAIL,
            payload: message ? message : "no err msg",
          });
        });
    } catch (reason) {}
  };

export const listUserOrders = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Order.ORDER_LIST_USER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log("update prod red -> ", user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .get(`/api/orders/myorders`, config)
      .then((res) => {
        dispatch({
          type: Order.ORDER_LIST_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        dispatch({
          type: Order.ORDER_LIST_USER_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Order.ORDER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log("update prod red -> ", user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .get(`/api/orders`, config)
      .then((res) => {
        dispatch({
          type: Order.ORDER_LIST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        dispatch({
          type: Order.ORDER_LIST_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const deliverOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Order.ORDER_DELIVER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log("update prod red -> ", user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .put(`/api/orders/${orderId}/deliver`, config)
      .then((res) => {
        dispatch({
          type: Order.ORDER_DELIVER_SUCCESS,
        });
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        dispatch({
          type: Order.ORDER_DELIVER_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

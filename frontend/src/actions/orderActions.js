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

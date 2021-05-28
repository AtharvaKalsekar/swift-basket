import { User } from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: User.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/users/login", { email, password }, config)
      .then((res) => {
        dispatch({
          type: User.USER_LOGIN_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        //   console.log("Error in user login ", reason);
        dispatch({
          type: User.USER_LOGIN_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: User.USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: User.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/users", { name, email, password }, config)
      .then((res) => {
        dispatch({
          type: User.USER_REGISTER_SUCCESS,
          payload: res.data,
        });

        dispatch({
          type: User.USER_LOGIN_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      })
      .catch((reason) => {
        const {
          response: {
            data: { message },
          },
        } = reason;
        //   console.log("Error in user login ", reason);
        dispatch({
          type: User.USER_REGISTER_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: User.USER_DETAILS_REQUEST,
    });

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
      .get(`/api/users/${id}`, config)
      .then((res) => {
        dispatch({
          type: User.USER_DETAILS_SUCCESS,
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
          type: User.USER_DETAILS_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: User.USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    console.log("update prod red -> ", user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios
      .put(`/api/users/profile`, user, config)
      .then((res) => {
        dispatch({
          type: User.USER_UPDATE_PROFILE_SUCCESS,
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
          type: User.USER_UPDATE_PROFILE_FAIL,
          payload: message ? message : "no err msg",
        });
      });
  } catch (reason) {}
};

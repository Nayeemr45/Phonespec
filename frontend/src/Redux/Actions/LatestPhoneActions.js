import axios from "axios";
import {
  LATEST_PHONE_REQUEST,
  LATEST_PHONE_SUCCESS,
  LATEST_PHONE_FAIL,
} from "../Constants/LatestPhoneConstants";

export const latestPhones = () => async (dispatch) => {
  try {
    dispatch({
      type: LATEST_PHONE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("http://localhost:5000/v2/latest", config);

    dispatch({
      type: LATEST_PHONE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LATEST_PHONE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

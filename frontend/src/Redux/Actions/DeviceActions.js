import axios from "axios";
import {
  LATEST_DEVICES_REQUEST,
  LATEST_DEVICES_SUCCESS,
  LATEST_DEVICES_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAIL,
} from "../Constants/DeviceConstants";
import { BaseUrl } from "../../Services/Constants";

export const getLatestDevice = () => async (dispatch) => {
  try {
    dispatch({
      type: LATEST_DEVICES_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BaseUrl}/latest`, config);

    dispatch({
      type: LATEST_DEVICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LATEST_DEVICES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getDeviceDetails = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: DEVICE_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BaseUrl}/${slug}`, config);

    dispatch({
      type: DEVICE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

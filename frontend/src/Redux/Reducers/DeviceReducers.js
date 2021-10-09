import {
  LATEST_DEVICES_REQUEST,
  LATEST_DEVICES_SUCCESS,
  LATEST_DEVICES_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAIL,
} from "../Constants/DeviceConstants";

export const latestDeviceReducer = (state = {}, action) => {
  switch (action.type) {
    case LATEST_DEVICES_REQUEST:
      return { loading: true };
    case LATEST_DEVICES_SUCCESS:
      return { loading: false, latestDevice: action.payload };
    case LATEST_DEVICES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const deviceDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVICE_DETAILS_REQUEST:
      return { loading: true };
    case DEVICE_DETAILS_SUCCESS:
      return { loading: false, device: action.payload };
    case DEVICE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

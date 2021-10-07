import {
  LATEST_PHONE_REQUEST,
  LATEST_PHONE_SUCCESS,
  LATEST_PHONE_FAIL,
} from "../Constants/LatestPhoneConstants";

export const latestPhoneReducer = (state = {}, action) => {
  switch (action.type) {
    case LATEST_PHONE_REQUEST:
      return { loading: true };
    case LATEST_PHONE_SUCCESS:
      return { loading: false, latestPhone: action.payload };
    case LATEST_PHONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

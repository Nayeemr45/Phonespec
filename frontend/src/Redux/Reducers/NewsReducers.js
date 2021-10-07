import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAIL,
} from "../Constants/NewsConstants";

export const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return { newsloading: true };
    case NEWS_SUCCESS:
      return { newsloading: false, news: action.payload };
    case NEWS_FAIL:
      return { newsloading: false, newserror: action.payload };
    default:
      return state;
  }
};

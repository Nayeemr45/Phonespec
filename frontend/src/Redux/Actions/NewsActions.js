import axios from "axios";
import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAIL,
} from "../Constants/NewsConstants";
import { BaseUrl } from "../../Services/Constants";

export const getNews = (page) => async (dispatch) => {
  try {
    dispatch({
      type: NEWS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BaseUrl}/news/${page}`,
      config
    );

    dispatch({
      type: NEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

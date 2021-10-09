import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { latestDeviceReducer,deviceDetailsReducer } from "../Redux/Reducers/DeviceReducers";
import { newsReducer } from "../Redux/Reducers/NewsReducers";

const reducer = combineReducers({
  latestDeviceList: latestDeviceReducer,
  deviceDetails: deviceDetailsReducer,
  newsList: newsReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

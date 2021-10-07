import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { latestPhoneReducer } from "../Redux/Reducers/LatestPhoneReducers";
import { newsReducer } from "../Redux/Reducers/NewsReducers";

const reducer = combineReducers({
  latestPhonesList: latestPhoneReducer,
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

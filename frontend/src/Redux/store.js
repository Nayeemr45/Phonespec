import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import {
//   getAllUserReducer
// } from "./reducers/UserReducers";

const reducer = combineReducers({
//   userResetPass:userResetPassReducer,
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
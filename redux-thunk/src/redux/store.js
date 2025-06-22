import { applyMiddleware, createStore } from "redux";
import MainReducer from "./reducer/MainReducer";
import { thunk } from "redux-thunk";
const store = createStore(MainReducer,applyMiddleware(thunk))
export default store;
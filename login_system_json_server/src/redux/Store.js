import { applyMiddleware, createStore } from "redux";
import MainReducer from "./reducer/MainReducer";
import { thunk } from "redux-thunk";
const Store = createStore(MainReducer, applyMiddleware(thunk))
export default Store;
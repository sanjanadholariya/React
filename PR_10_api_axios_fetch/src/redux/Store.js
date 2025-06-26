import { applyMiddleware, createStore } from "redux";
import MainReducer from "./Reducer/MainReducer";
import { thunk } from "redux-thunk";
const Store = createStore(MainReducer,applyMiddleware(thunk))
export default Store;
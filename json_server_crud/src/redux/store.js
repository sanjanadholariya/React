import { applyMiddleware, createStore } from "redux";
import mainReducer from "./reducer/mainReducer";
import { thunk } from "redux-thunk";
const store = createStore(mainReducer , applyMiddleware(thunk))
export default store;
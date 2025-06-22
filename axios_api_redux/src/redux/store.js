import { applyMiddleware, createStore } from "redux";
import mainReducer from "./Reducer/mainReducer";
import { thunk } from "redux-thunk";
const store = createStore(mainReducer,applyMiddleware(thunk))
export default store;
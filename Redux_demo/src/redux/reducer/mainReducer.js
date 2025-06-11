import { combineReducers } from "redux";
import Counter from "./CounterReducer";

const mainReducer = combineReducers({
    cnt : Counter
}) 

export default mainReducer;
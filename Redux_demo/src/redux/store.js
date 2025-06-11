import { createStore } from "redux";
import mainReducer from "./reducer/MainReducer";

const store = createStore(mainReducer)
export default store
import { createStore } from "redux";
import MainReducer from "./Reducer/MainReducer";
const Store = createStore(MainReducer)
export default Store
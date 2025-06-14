import { createStore } from "redux";
import mainReducer from "./reducer/mainReducer";
const Store = createStore(mainReducer)
export default Store;
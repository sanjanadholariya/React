import { createStore } from "redux";
import mainReducer from "./reeucer/mainReducer";
const store = createStore(mainReducer)
export default store;
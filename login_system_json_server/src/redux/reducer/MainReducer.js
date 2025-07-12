import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
const MainReducer = combineReducers({
    auth : AuthReducer
})
export default MainReducer;
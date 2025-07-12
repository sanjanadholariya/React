import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import AuthReducer from "./AuthReducer";
const MainReducer = combineReducers({
    post : PostReducer,
    auth: AuthReducer
})
export default MainReducer;
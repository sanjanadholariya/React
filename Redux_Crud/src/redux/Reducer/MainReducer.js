import { combineReducers } from "redux";
import CrudReducer from "./CrudReducer";
const MainReducer = combineReducers({
    crud : CrudReducer
})
export default MainReducer;
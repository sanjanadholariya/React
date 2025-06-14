import { combineReducers } from "redux";
import crudReducer from "./credReducer";

const mainReducer = combineReducers({
    crud : crudReducer
})

export default mainReducer
import { combineReducers } from "redux";
import CRUD from "./crudReducer";

const mainReducer = combineReducers({
    crud : CRUD
})

export default mainReducer;
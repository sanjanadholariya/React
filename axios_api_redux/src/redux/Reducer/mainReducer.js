import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
import quotesReducer from "./quotReducer";
const mainReducer = combineReducers({
    todos : toDoReducer,
    quote : quotesReducer
})
export default mainReducer
import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import productReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import RecipeReducer from "./RecipesReducer";
import UserReducer from "./UsersReducer";
const MainReducer = combineReducers({
    post : PostReducer,
    product : productReducer,
    cart : CartReducer,
    recipe : RecipeReducer,
    users : UserReducer
})
export default MainReducer
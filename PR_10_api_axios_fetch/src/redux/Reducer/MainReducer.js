import { combineReducers } from "redux"
import CartReducer from "./CartReducer"
import recipeReducer from "./RecipeReducer";

const MainReducer = combineReducers({
    cart : CartReducer,
    recipe : recipeReducer
})

export default MainReducer;
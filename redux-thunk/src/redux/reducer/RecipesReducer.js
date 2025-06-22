const initialState = {
    recipe : [],
    error : null
}

const RecipeReducer = (state = initialState , action)=>{
    switch(action.type){
        case "getRecipe" :            
            return{
                ...state,
                recipe : action.payload,
                error : null
            };
        case "errorRecipe":
            return{
                ...state,
                error : action.payload
            };
        default:
            return state;
    }
}

export default RecipeReducer;
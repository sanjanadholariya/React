const initialState = {
    recipe : [],
    err : null
}

const recipeReducer = (state = initialState , action) =>{
    switch(action.type){
        case "getRecipe":
            return{
                ...state,
                recipe : action.payload,
                err : null
            };
        case "recipeErr":
            return{
                ...state,
                err : action.payload
            };
        default:
            return state;
    }
}

export default recipeReducer;
const initialState = {
    quote : [],
    err : null
}

const quotesReducer = (state = initialState , action) => {
    switch(action.type){
        case "getQuotes":
            return{
                ...state, 
                quote : action.payload,
                err : null
            };
        case "quoteErr":
            return{
                ...state,
                err : action.payload
            }
        default:
            return state;
    }
}

export default quotesReducer;
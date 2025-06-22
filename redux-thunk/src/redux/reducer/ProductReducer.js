const initialState = {
    product : [],
    error : null
}

const productReducer = (state = initialState , action) => {
    switch(action.type){
        case "getProduct":
            return{
                ...state,
                product : action.payload,
                error :  null
            }
        case "errorProduct":
            return{
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}

export default productReducer;
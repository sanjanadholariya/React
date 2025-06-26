const initialState = {
    cart : [],
    err : null
}

const CartReducer = (state = initialState , action) => {
    switch(action.type){
        case "getCart":            
            return{
                ...state ,
                cart : action.payload,
                err : null
            };
        case "errCart":
            return{
                ...state,
                err : action.payload
            }
        default:
            return state
    }
}

export default CartReducer;
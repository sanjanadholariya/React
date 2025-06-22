const initialState = {
    cart : [],
    error : null
}

const CartReducer = (state = initialState , action) => {
    switch(action.type){
        case "getCart":
            return{
                ...state,
                cart : action.payload,
                error : null
            };
        case "errorCart":
            return{
                ...state, 
                error : action.payload
            };
        default : 
            return state;
                
            
    }
}
export default CartReducer;
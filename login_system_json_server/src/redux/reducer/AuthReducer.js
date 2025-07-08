const initialState = {
    users : [],
    err : null
}

const AuthReducer = (state = initialState , action) => {
    switch(action.type){
        case "registerUser":
            return{
                ...state , 
                users : action.payload,
                err : null
            };
        case "resiterErr":
            return{
                ...state,
                err : action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;
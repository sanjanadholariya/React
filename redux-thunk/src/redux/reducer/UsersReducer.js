const initialState = {
    users : [],
    error : null
}

const UserReducer = (state = initialState , action) => {
    switch(action.type){
        case "getUsers":
            return{
                ...state, 
                users : action.payload,
                error : null
            };
        case "errorUsers":
            return{
                ...state, 
                error : action.payload
            };
        default :
            return state;
    }
}

export default UserReducer;
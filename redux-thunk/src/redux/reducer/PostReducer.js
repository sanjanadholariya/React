const initialState = {
    post : [],
    error : null
}

const PostReducer = (state = initialState , action) => {
    switch(action.type){
        case "getPost":
            return {
                ...state , 
                post : action.payload,
                error : null
            }
        case "getError":
            return{
                ...state , 
                error : action.payload
            }

        default:
            return state;
    }
}

export default PostReducer
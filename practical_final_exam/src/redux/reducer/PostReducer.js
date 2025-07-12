const initialState = {
    post: [],
    err: null
}

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "showPost":
            return {
                ...state,
                post: action.payload
            };
        case "updatePost":
            return {
                ...state,
                post: action.payload
            };
        case "deletePost":
            console.log("post delete");

            return {
                ...state,
                posts: state.post.filter((post) => post.id !== action.payload),
            };
        case "addPost":
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                )
            };
        default:
            return state;
    }
}

export default PostReducer;
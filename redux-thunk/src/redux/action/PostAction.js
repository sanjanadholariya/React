const GET_POST = () => {
    return async (dispatch) => {
        try {
            const data = await fetch('https://dummyjson.com/posts')
            let res = await data.json();
            

            dispatch({
                type: "getPost",
                payload: res.posts
            })
        }
        catch (err) {
            dispatch({
                type :"getError",
                payload : err
            })

        }
    }
}

export { GET_POST }
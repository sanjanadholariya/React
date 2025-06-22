const getUsers = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://dummyjson.com/users`)
            const res = await data.json();
            console.log(res);

            dispatch({
                type: "getUsers",
                payload: res
            })
        }
        catch(err){
            dispatch({
                type : "errorUsers",
                payload : err
            })
        }

        
    }
}

export default getUsers;
const getCart = () => {
    return async (dispatch) => {
        try{
            const data =await fetch(`https://dummyjson.com/carts`)
            const res = await data.json();
           

            dispatch({
                type : "getCart",
                payload : res
            })
            
        }
        catch(err){
            dispatch({
                type : "errorCart",
                payload : err
            })
        }
    }
}

export default getCart
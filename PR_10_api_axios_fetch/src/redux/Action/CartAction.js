const getCart = () => {
    return async(dispatch)=>{
        try{
            const data = await fetch(`https://dummyjson.com/carts`)
        const res = await data.json();
        console.log(res.carts);
        
        dispatch({
            type : "getCart",
            payload : res.carts
        })
        }
        catch(err){
            dispatch({
                type : "cartErr",
                payload : err
            })
        }
    }
}
export {getCart};
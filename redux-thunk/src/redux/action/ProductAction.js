const getProduct = () => {
    return async (dispatch) => {
       try{
         const data = await fetch(`https://dummyjson.com/products`)
        const res = await data.json();
        
        dispatch({
            type :"getProduct",
            payload : res.products
        })
       }
       catch(err){
        dispatch({
            type : "errorProduct",
            payload : err
        })
       }
        
    }
}
export default getProduct;
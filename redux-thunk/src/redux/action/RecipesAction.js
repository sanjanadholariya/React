const getRecipe = () => {
    return async(dispatch) => {
        try{
            const data = await fetch(`https://dummyjson.com/recipes`)
            const res = await data.json();

            dispatch({
                type : "getRecipe",
                payload : res.recipes
            })
            
        }catch(err){
            dispatch({
                type : "errorRecipe",
                payload : err
            })
        }
    }
}

export default getRecipe;
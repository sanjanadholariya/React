import axios from "axios";

const getRecipe = () => {
    return (dispatch) => {
        axios.get(`https://dummyjson.com/recipes`)
        .then((res) => {
            dispatch({
                type: "getRecipe",
                payload: res.data.recipes 
            })
        })
        .catch((err) => {
            dispatch({
                type: "recipeErr",
                payload: err
            })
        })
    }
}

export { getRecipe }

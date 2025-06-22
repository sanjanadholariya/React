import axios from "axios"

const GET_QUOTES = () => {
    return async(dispatch) =>{
       
            axios.get(`https://dummyjson.com/quotes`)
            .then((res)=>{
                
                
                dispatch({
                    type : "getQuotes",
                    payload : res.data.quotes
                })
                
            })
            .catch((err)=>{
                dispatch({
                    type : "quoteErr",
                    payload : err
                })
            })
        
        
    }
}

export default GET_QUOTES;
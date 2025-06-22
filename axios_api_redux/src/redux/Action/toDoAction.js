import axios from "axios"
import { useState } from "react"

const GET_TODO = () => {

    return async (dispatch) => {
        await axios.get('https://dummyjson.com/todos')
            .then((res) => {
                
                
                dispatch({
                    type: "getToDo",
                    payload: res.data.todos
                })
            })
            .catch((err) => {
                dispatch({
                    type: "toDoError",
                    payload: err
                })
            })

    }
}

export default GET_TODO;
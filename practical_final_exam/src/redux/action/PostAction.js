import axios from "axios"

const SHOW_POST = () => {
    return async(dispatch) => {
        try{
            const res = await fetch(`http://localhost:5000/posts`,{
                method : "GET",
                headers : {
                    'Content-Type' : "application/json"
                }
            })

            const data = await res.json()
            
            dispatch({
                type : "showPost",
                payload : data
            })
            

        }catch(err){
            dispatch({
                type : "showErr",
                payload : err
            })
        }
    }
}

const ADD_POST = (formInput) => {
    return async(dispatch) => {
        try{
            const res = await fetch(`http://localhost:5000/posts`,{
                method : "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(formInput)

            })

            const data =await res.json();
            console.log(data);
            
            

            dispatch({
                type : "addPost",
                payload : data
            })
            
        }catch(err){
            dispatch({
                type : "addErr",
                payload : err
            })
        }
    }
}

const UPDATE_POST = (id, updatedData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();

      dispatch({
        type: 'updatePost',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'updateErr',
        payload: err,
      });
    }
  }
}

const DELETE_POST = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: 'DELETE',
      })

      dispatch({
        type: 'deletePost',
        payload: id,
      })
    } catch (err) {
      console.error('Delete failed:', err);
      dispatch({
        type: 'deleteErr',
        payload: err,
      })
    }
  }
}


export {SHOW_POST , UPDATE_POST , ADD_POST , DELETE_POST};
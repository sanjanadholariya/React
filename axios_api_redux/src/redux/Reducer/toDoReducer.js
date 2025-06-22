const initialState = {
    todo : [],
    error : null
}
const toDoReducer = (state = initialState , action) => {
  switch(action.type){
    case "getToDo":
        return{
            ...state , 
            todo : action.payload
        };
    case "toDoError":
        return {
            ...state,
            error : action.payload
        }
    default : 
        return state;
  }
}

export default toDoReducer
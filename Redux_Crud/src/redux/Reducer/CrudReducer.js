const initialState = {
    users : JSON.parse(localStorage.getItem('data')) || []
}

const CrudReducer = (state = initialState , action) => {
    switch(action.type){
        case "addData":
            const updateAdd = action.payload
            localStorage.setItem('data',JSON.stringify(updateAdd))
            return{
                ...state,
                users : updateAdd
            };
        case "deleteData" :
            const updateDelete = state.users.filter((val)=>{
                return val.id != action.payload
            })
            localStorage.setItem('data',JSON.stringify(updateDelete))
            return{
                ...state,
                users : updateDelete
            };
        case "editData":
            const updateEdit = state.users.map((val)=>{
                if(val.id == action.payload.id){
                    return action.payload
                }
                return val;
            })
            localStorage.setItem('data',JSON.stringify(updateEdit))
            return{
                ...state,
                users : updateEdit
            }
        default :
            return state;
        
    }



}

export default CrudReducer
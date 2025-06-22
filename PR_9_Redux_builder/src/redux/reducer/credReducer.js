const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addData":
            const allDataAdd = action.payload
            localStorage.setItem('users', JSON.stringify(allDataAdd))
            return {
                ...state,
                users: allDataAdd
            };
        case "deleteData":
            const allDataDelete = state.users.filter((val) => {
                return val.id != action.payload
            })            
            localStorage.setItem('users', JSON.stringify(allDataDelete))
            return {
                ...state,
                users: allDataDelete
            }
        case "editData" :
            const allDataEdit = state.users.map((val)=>{
                if(val.id == action.payload.id){
                    return action.payload;
                }
                return val;
            })
            localStorage.setItem('users',JSON.stringify(allDataEdit))
            return{
                ...state,
                users : allDataEdit
            }
        default:
            return state;
    }
}

export default crudReducer
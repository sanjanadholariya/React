import { act } from "react"

let initialSate =  {
    users : JSON.parse(localStorage.getItem('users')) || []
}
let allRecord = []
const CRUD = (state = initialSate , action) => {
    switch(action.type){
        case "addData":
             allRecord = action.payout
            localStorage.setItem('users',JSON.stringify(allRecord))
            return{
                ...state,
                users : allRecord
            };
        case "deleteData":
            allRecord = state.users.filter((val)=>{
                return val.id != action.payout
            })
            console.log(allRecord);
            
            localStorage.setItem('users',JSON.stringify(allRecord))
            return{
                ...state,
                users : allRecord
            };
        case "editData":
            allRecord = state.users.map((val)=>{
                if(val.id == action.payout.id){
                    return action.payout;
                }
                return val;
            })
            localStorage.setItem('users',JSON.stringify(allRecord))
            return{
                ...state,
                users : allRecord
            }
        default :
            return state;
    }
}

export default CRUD;
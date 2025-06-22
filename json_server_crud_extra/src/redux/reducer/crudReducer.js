    const initialState = {
        users : [],
        err : null
    }

    const crudReducer = (state = initialState , action)=>{

        switch(action.type){
            case "addData" :
                return{
                    ...state,
                    users : action.payload,
                    err : null
                };
            case "addErr":
                return{
                    ...state, 
                    err : action.payload
                };
            case "getData":
                return{
                    ...state,
                    users : action.payload,
                    err : null
                };
            case "getErr":
                return{
                    ...state,
                    err : action.payload
                };
            case "deleteData":
                return{
                    ...state,
                    users : action.payload,
                    err:null
                };
            case "deleteErr":
                return{
                    ...state,
                    err : null
                };
            case "editData":
                return{
                    ...state,
                    users : action.payload,
                    err : null
                };
            case "editErr":
                return{
                    ...state,
                    err : action.payload
                };
            default :
                return state;
        }

    }

    export default crudReducer;
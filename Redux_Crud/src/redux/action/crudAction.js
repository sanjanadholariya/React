 const addData = (data) => {
    return{
        type : "addData",
        payout : data
    }
 }
 const deleteData = (id) => {
    return{
        type : "deleteData",
        payout : id
    }
 }
 const editData = (updateUser) => {
    return{
        type : "editData",
        payout : updateUser
    }
 }

 export {addData , deleteData , editData}
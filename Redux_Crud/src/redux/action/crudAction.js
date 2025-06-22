const AddData = (allData) => {
    return{
        type : "addData",
        payload : allData
    }
}
const DeleteData = (id) => {
    return{
        type : "deleteData",
        payload : id

    }
}
const EditData = (formInput) => {
    return{
        type : "editData",
        payload : formInput
    }
}

export {AddData , DeleteData, EditData}
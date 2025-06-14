const addData = (allData) => {
  
  return{
    type : "addData",
    payload : allData
  }
}

const deleteData = (id) => {
  return{
    type : "deleteData",
    payload : id
  }
}

const editData = (formInput) => {
  return{
    type : "editData",
    payload : formInput
  }
}
export {addData , deleteData , editData}
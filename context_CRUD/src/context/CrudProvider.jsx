import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const CrudContext = createContext()

 const CrudProvider = ({children}) => {

  const navigate = useNavigate();

  const [formInput , setFormInput] = useState({
    name : "",
    email : "",
    password : ""
  })
  const [allRecord , setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  let updatedData;

  const [checkId , setCheckId] = useState("") 

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(allRecord))
  }, [allRecord])


  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormInput({
      ...formInput,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let withId = {
      id : Math.floor(Math.random()*100000),
      ...formInput
    }

    if(checkId != ""){
      updatedData = allRecord.map((val)=>{
        if(val.id == checkId){
          return withId
        }
        else{
          return val;
        }
      })
    }
    else{
      updatedData = [...allRecord , withId]
    }


    setAllRecord(updatedData);

    console.log(updatedData);

    setFormInput({
      name : "",
      email : "",
      password : ""
    })

    setCheckId("")

    navigate(`/`)
  }

  const deleteRecord = (id) => {
    updatedData = allRecord.filter((val)=>{
      return val.id != id
    })

    setAllRecord(updatedData)
  }

  
  const editRecord = (id) => {

    setCheckId(id)

    const single = allRecord.find(val => val.id == id)
    console.log(single);

    setFormInput(single)

    navigate(`/edit/${id}`)
    
  }
  

  return (
    <CrudContext.Provider value={{formInput , setFormInput , handleSubmit , handleChange , allRecord , deleteRecord , editRecord , single}}>
      {children}
    </CrudContext.Provider>
  )
}

export default CrudProvider
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../../firebase_db'
import { onValue, ref, remove } from 'firebase/database';

const View = () => {

  const [getData , setGetData] = useState("")
  const navigate = useNavigate()

  const getUsers = () => {
    const record = ref(db,'users')
    onValue(record,(row)=>{
      const data = row.val();
      setGetData(data);
    })
  }

  useEffect(()=>{
    getUsers();
  },[]);

  const handleDelete = (id) =>{
    const deleteData = ref(db,`users/${id}`)

    remove(deleteData);
    getUsers();
  }

  const handleEdit = (id , name , email , password) =>{    
    const data = {id , name , email , password}
   navigate(`edit/`,{state : data})
  }
  
  return (
    <div align="center">
      <h1>VIEW USER</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            //  console.log( Object.entries(getData))

            Object.entries(getData).map(([key,value])=>{
              return(
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                  <td>
                    <button onClick={()=>handleDelete(key)}>Delete</button>
                    <button onClick={() => handleEdit(key,value.name , value.email , value.password)}>Edit</button>
                  </td>
                </tr>
              )
            })
             
            }
          </tbody>
        </table>

      <Link to="/add">Add</Link>
    </div>
  )
}

export default View
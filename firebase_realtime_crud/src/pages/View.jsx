import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase_db'
import { onValue, ref, remove } from 'firebase/database';

const View = () => {

  const [getData , setGetData] = useState("")

  const getUsers = () => {
    const record = ref(db,'users')
    onValue(record,(row)=>{
      const data = row.val();
      setGetData(data);
    })
  }

  useEffect(()=>{
    getUsers();
  },[])

  const handleDelete = (id) =>{
    const deleteData = ref(db,`users/${id}`)

    remove(deleteData);
    getUsers();
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
                    <button>Edit</button>
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
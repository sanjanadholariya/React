import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, editData } from './redux/action/crudAction'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const View = () => {

    const data = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = (id) => {
      
      navigate(`/edit/${id}`)
      
    }

  return (
    <div align="center">
      <Link to={"/add"}><button>add</button></Link>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                data.map((val)=>{
                  const {id , name , email , password} = val
                  return(
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button onClick={() => dispatch(deleteData(id))}>Delete</button>
                        <button onClick={() => handleEdit(id)}>Edit</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
    </div>
  )
}

export default View
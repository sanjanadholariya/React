import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_DATA, DELETE_DATA } from '../redux/action/crudActin'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {

  const data = useSelector(state => state.crud.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(ADD_DATA())
  },[])

  const handleDelete = (id) => {
    dispatch(DELETE_DATA(id))
  }
  return (
    <div align="center">
      <h1>View User</h1>
      <br /><hr /><br />
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {
            data.length===0 ? "Loading..." :
            data.map((val,index)=>{
              const {id , name , email} = val
              return(
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <button >Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <br /><hr /><br />
      <Link to="/add">Add</Link>
    </div>
  )
}

export default View
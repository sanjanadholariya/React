import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../redux/action/crudAction'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {
  const data = useSelector(state=> state.crud.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  return (
    <div align="center">
      <h1>View Users</h1>
      <hr />
      <table border={1}>
        <thead>
         <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
         </tr>
        </thead>
        <tbody>
          {
            data.map((val,index)=>{
              const {id,name ,email} = val
              return(
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button onClick={() => dispatch(deleteData(id))}>Delete</button>
                    <button onClick={() => userEdit(id)}>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr />
      <Link to="/add"><button>Add</button></Link>

    </div>
  )
}

export default View
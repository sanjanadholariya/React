import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteData } from '../redux/action/crudAction'

const View = () => {

    const data = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const editUser = (id) => {
        navigate(`/edit/${id}`)
    }

  return (
    <div align="center">
        <h1>View Users</h1>
        <hr /><hr /><br />
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val,index)=>{
                        const {id , name , email} = val
                        return(
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button onClick={() => editUser(id)}>Edit</button>
                                    <button onClick={() => dispatch(DeleteData(id))}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <hr /><br />
        <Link to="/add"><button>Add</button></Link>
    </div>
  )
}

export default View
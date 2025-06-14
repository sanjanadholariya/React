import React, { useContext } from 'react'
import { CrudContext } from '../context/CrudProvider'
import { Link } from 'react-router-dom'

const View = () => {

    const {allRecord , deleteRecord , editRecord} = useContext(CrudContext)

  return (
    <div align="center">
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
                    allRecord.map((val , index)=>{
                        const {id , name , email , password} = val
                        return(
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{password}</td>
                                <td>
                                    <button onClick={() => deleteRecord(id)}>Delete</button>
                                    <button onClick={() => editRecord(id)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <br /><br />
        <Link to="/add"><button>Add</button></Link>
    </div>
  )
}

export default View
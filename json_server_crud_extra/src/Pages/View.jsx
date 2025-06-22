import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_DATA, GET_DATA } from '../redux/action/crudAction';
import { Link } from 'react-router-dom';

const View = () => {

  const data = useSelector(state => state.crud.users)
  console.log(data);

  const dispatch = useDispatch();

  useEffect(()=>{
      console.log("GET_DATA dispatched");

    dispatch(GET_DATA())
  },[])
  

  return (
    <div align="center">
      <h1>View User</h1>
      <hr /><br /><hr />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead><tbody>
          {
            data.length===0 ? "Loading...."
            : data.map((val,index)=>{
              const{id , name , email} = val;
              return(
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button onClick={() => dispatch(DELETE_DATA(id))}>Delete</button>
                    <button>Edit</button>
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
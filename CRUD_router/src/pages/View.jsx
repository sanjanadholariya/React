import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const View = () => {

  const [allRecord , setAllRecord] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('data')) || [];
    setAllRecord(data)    
  },[])

  const gotoEdit = (editId) => {
    navigate(`/edit/${editId}`);
  }


  return (
    <div align="center">

      <h1 className="mt-5 mb-5">View Table</h1>

      <table className="table table-light table-striped" border={1}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {
            allRecord.map((val,index) => {
              const {id , name , email , password} = val
              return(
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button className="me-2" onClick={() => gotoEdit(id)}>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div>
       <Link to={`/add`}> <button>Add More</button></Link>
      </div>
    </div>
  )
}

export default View
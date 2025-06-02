import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { loadEnv } from "vite"

const Edit = () => {

  const navigate = useNavigate()
  const {editId} = useParams()

  const [formInput , setFormInput] = useState({
    name : "",
    email : "",
    password : ""
  })

  const [allRecord , setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  useEffect(()=>{
    console.log(editId);
    
    if(editId){
        const single = allRecord.find((val)=>val.id == editId)
        setFormInput(single)

        console.log(single);
        
    }
    else {
      console.log("Record not found for editId:", editId);
    }
  },[editId , allRecord])

  const handleChange = (e) => {
    const {name , value} = e.target
    setFormInput({
      ...formInput,
      [name] : value
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = allRecord.map((val) => {
        val.id == editId ? formInput : val
    })

    localStorage.setItem('data',JSON.stringify(updatedData))
    setAllRecord(updatedData)

    navigate(`/`)
    
    
    
  }


  return (
    <div align="center">
      <h1 className="mt-5 mb-5">Add Record</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                Name :- 
              </td>
              <td>
                  <input type="text" name="name" onChange={handleChange} value={formInput.name} placeholder="Enter Your Name...."/>
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input type="text" name="email" onChange={handleChange} value={formInput.email} placeholder="Enter Your Email..." />
              </td>
            </tr>
            <tr>
              <td>Passeword :-</td>
              <td>
                <input type="password" name="password" onChange={handleChange} value={formInput.password} placeholder="Enter Your Password..."/>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" name="" id="" value="Edit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default  Edit 

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Add = () => {

  const navigate = useNavigate()

  const [formInput , setFormInput] = useState({
    name : "",
    email : "",
    password : ""
  })

  const [allRecord , setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  const handleChange = (e) => {
    const {name , value} = e.target
    setFormInput({
      ...formInput,
      [name] : value
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const withId = {
      id : Math.floor(Math.random()*10000),
      ...formInput
    }

    const updatedData = [
      ...allRecord ,
      withId
    ]

    localStorage.setItem('data',JSON.stringify(updatedData))

    setAllRecord(updatedData)

    console.log(updatedData);
    
    navigate(`/`)

    setFormInput({
      name : "",
      email : "",
      password : ""
    })
    
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
                {/* <Link to={`/`}> */}
                <input type="submit" name="" id="" />
                {/* </Link> */}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Add
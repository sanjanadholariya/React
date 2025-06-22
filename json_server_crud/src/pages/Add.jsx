import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { ADD_DATA } from "../redux/action/crudActin"

const Add = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: ""
  })

  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInput(
      {
        ...formInput,
        [name]: value
      }
    )

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);

    dispatch(ADD_DATA(formInput))


    setFormInput({
      name: "",
      email: ""
    })
    navigate(`/`) 
  }

  return (
    <div align="center">
      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" name="name" onChange={handleChange} value={formInput.name} placeholder="Enter Your Name" />
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input type="text" name="email" onChange={handleChange} value={formInput.email} placeholder="Enter Your Email" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />
      <hr />
      <br />
      <Link to="/">View</Link>
    </div>
  )
}

export default Add
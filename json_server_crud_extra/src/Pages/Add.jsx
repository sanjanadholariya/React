import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADD_DATA } from "../redux/action/crudAction"
import { useNavigate } from "react-router-dom"

const Add = () => {

  const [formInput , setFormInput] = useState({
    name : "",
    email : ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormInput({
      ...formInput,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    
    dispatch(ADD_DATA(formInput))
    navigate("/")
  }

  return (
    <div align="center">
      <h1>Add User</h1>
      <br /><hr /><br />
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" name='name' onChange={handleChange} value={formInput.name} placeholder='Enter Your Name...'/>
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input type="text" name='email' onChange={handleChange} value={formInput.email} placeholder='Enter Your Email...' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Add
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_DATA, EDIT_DATA } from "../redux/action/crudAction"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {

  const [formInput , setFormInput] = useState({
    name : "",
    email : ""
  })
  const {id} = useParams();
  console.log(id);
  
  const data = useSelector(state => state.crud.users)
  console.log(data);
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    const single = data.find((val)=> val.id == id)
    console.log(single);
    
    setFormInput(single)
  },[data])

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
    
    dispatch(EDIT_DATA(formInput))
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
                <input type="submit" value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Edit;
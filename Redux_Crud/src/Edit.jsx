import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData, editData } from './redux/action/crudAction'
const Edit = () => {
  const data = useSelector(state => state.crud.users)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  // console.log(id);



  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('users')) || [])

  useEffect(() => {
    let single = allData.find(val => val.id == id)
    console.log(single);
    setFormInput(single)
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editData(formInput))
    navigate("/")

  }

  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" name='name'  onChange={handleChange} value={formInput.name} placeholder='Enter Your Name...' />
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input type="text" name='email'  onChange={handleChange} value={formInput.email} placeholder='Enter Your Email...' />
              </td>
            </tr>
            <tr>
              <td>Password :-</td>
              <td>
                <input type="text" name='password'  onChange={handleChange} value={formInput.password} placeholder='Enter your Password...' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Update"/>
              </td>
            </tr>
          </tbody>

        </table>
      </form>
    </div>
  )
}

export default Edit
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData } from './redux/action/crudAction'


const Add = () => {

    const data = useSelector(state => state.crud.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const [formInput , setFormInput] = useState({
        name : "",
        email :"",
        password : ""
    })

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
            id : Math.floor(Math.random()*1000000),
            ...formInput
        }

        const oldRecord = JSON.parse(localStorage.getItem('users')) || []

        const allData = [...oldRecord , withId]

        localStorage.setItem('users',JSON.stringify(allData))
        setFormInput(allData)
        dispatch(addData(allData))
        console.log(data);
        

        navigate(`/`)
        
    }

  return (
    <div align="center">
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Name :-</td>
                        <td>
                            <input type="text" name='name' onChange={handleChange} placeholder='Enter Your Name...'/>
                        </td>
                    </tr>
                    <tr>
                        <td>Email :-</td>
                        <td>
                            <input type="text" name='email'  onChange={handleChange} placeholder='Enter Your Email...'/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password :-</td>
                        <td>
                            <input type="text" name='password'  onChange={handleChange} placeholder='Enter your Password...'/>
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
    </div>
  )
}

export default Add
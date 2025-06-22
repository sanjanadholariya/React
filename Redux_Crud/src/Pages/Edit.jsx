import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddData, EditData } from "../redux/action/crudAction"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.crud.users)
    const navigate = useNavigate()   
    
    const {id} = useParams()
    console.log(id);

    

    const [formInput, setFormInput] = useState({
        name: "",
        email: ""
    })

    useEffect(()=>{
        const single = data.find((val)=>val.id == id)
        setFormInput(single)
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);

        dispatch(EditData(formInput))

        setFormInput({
            name : "",
            email : ""
        })

        navigate(`/`)

    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <hr /><hr /><br />
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name :-</td>
                            <td>
                                <input type="text" name="name" onChange={handleChange} value={formInput.name} placeholder='Enter Your Name...' />
                            </td>
                        </tr>
                        <tr>
                            <td>Email :-</td>
                            <td>
                                <input type="text" name="email" onChange={handleChange} value={formInput.email} placeholder='Enter Your Email...' />
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

export default Edit
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/action/crudAction";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.crud.users)
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
        name: "",
        email: ""
    })
   
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const withId = {
            id: Math.floor(Math.random() * 10000),
            ...formInput
        }

        const allData = [...data, withId]

        dispatch(addData(allData))


        setFormInput({
            name: "",
            email: ""
        })

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

export default Add
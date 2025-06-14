import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/action/crudAction";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const data = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const [formInput , setFormInput] = useState({
      name : "",
      email : ""
    })
    
    useEffect(()=>{
      const single = data.find((val)=>{
        return val.id == id
      })
      setFormInput(single)
    },[id])

    const handleChange = (e) => {
      const {name , value} = e.target
      setFormInput({
        ...formInput,
        [name] : value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(editData(formInput))

      setFormInput({
        name : "",
        email : ""
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
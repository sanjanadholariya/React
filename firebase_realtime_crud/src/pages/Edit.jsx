import { ref, set, update } from "firebase/database";
import { db } from "../../firebase_db";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const location = useLocation();
    
    const database = db;

    const navigate = useNavigate();


    useEffect(()=>{
      setFormInput({
        name : location.state.name,
        email : location.state.email,
        password : location.state.password
      })
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id: Math.floor(Math.random() * 1000),
            ...formInput
        }
       
        const single = ref(db,`users/${location.state.id}`)
        update(single,{
          name : formInput.name,
          email : formInput.email,
          password : formInput.password
        })
        .then((res)=>{
          alert("Successfully Updated...")
        })
        .catch((err)=>{
          console.log(err);
          
        })

        setFormInput({
            name: '',
            email: "",
            password: ""
        })
        
        navigate("/")

    }


    return (
        <div align="center">
            <h1>ADD USER</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name :-</td>
                            <td>
                                <input type="text" name='name' onChange={handleChange} value={formInput.name} placeholder='Enter Your Name...' />
                            </td>
                        </tr>
                        <tr>
                            <td>Email :-</td>
                            <td>
                                <input type="text" name='email' onChange={handleChange} value={formInput.email} placeholder='Enter Your Email...' />
                            </td>
                        </tr>
                        <tr>
                            <td>Password :-</td>
                            <td>
                                <input type="password" name='password' onChange={handleChange} value={formInput.password} placeholder='Enter Your Password...' />
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

export default Edit
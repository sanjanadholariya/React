import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { REGESTER_USER } from '../redux/action/AuthAction'

const Register = () => {

    const [formInput , setFormInput] = useState({
        name : "",
        email : "",
        password : ""
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name , value } = e.target;
        setFormInput({
            ...formInput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);
        alert("hii")

        setFormInput({
            name : '',
            email : "",
            password : ""
        })

        dispatch(REGESTER_USER(formInput))
        
    }

    return (
        <div >
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6" >
                        <h1 align="center">Register User</h1>
                         <hr />
                        <br />
                       
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                                <input type="text" name='name' onChange={handleChange} value={formInput.name}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name Here...'/>
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={handleChange} value={formInput.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Here...'/>
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' onChange={handleChange} value={formInput.password} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here...'/>
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                            
                        </form>
                        <Link to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
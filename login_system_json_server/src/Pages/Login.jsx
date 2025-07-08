import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
   return (
        <div >
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6" >
                        <h1 align="center">Login User</h1>
                         <hr />
                        <br />
                       
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Here...'/>
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here...'/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            
                        </form>
                        <Link to={"/"}>Register</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || []

    const matched = allUsers.find(
      (user) => user.email === form.email && user.password === form.password
    )

    if (matched) {
      dispatch({ type: "LOGIN_SUCCESS", payload: matched })
      // localStorage.setItem("loginUser", JSON.stringify(matched)) // optional if reducer handles this
      navigate("/")
    } else {
      dispatch({ type: "AUTH_ERROR", payload: "Invalid Credentials" })
      alert("Invalid credentials")
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="mb-4 text-primary fw-bold text-center">🔐 Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
            <button className="btn btn-success w-100">Login</button>
            <p className="mt-3 text-center">
              New here? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
    
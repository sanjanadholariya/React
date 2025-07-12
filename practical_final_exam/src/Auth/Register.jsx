import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existing = JSON.parse(localStorage.getItem("allUsers")) || []

    if (existing.find((user) => user.email === form.email)) {
      alert("User already exists. Please login.")
    } else {
      // Save new user to localStorage
      const updatedUsers = [...existing, form]
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers))

      // Save current user as logged in (optional)
      localStorage.setItem("loginUser", JSON.stringify(form))

      // Dispatch login/register success to Redux
      dispatch({ type: "REGISTER_SUCCESS", payload: form })

      alert("Registered successfully. Welcome!")

      // Redirect to homepage
      navigate("/")
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="mb-4 text-primary fw-bold text-center">📝 Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />
            <button className="btn btn-primary w-100">Register</button>
            <p className="mt-3 text-center">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

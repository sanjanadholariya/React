import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const Add = () => {

  const navigate = useNavigate()

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    department: "",
    status: ""
  })

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Record Added Successfully...",
      icon: "success",
      draggable: true
    });

    const withId = {
      id: Math.floor(Math.random() * 10000),
      ...formInput
    }

    const updatedData = [...allRecord, withId]

    localStorage.setItem('data', JSON.stringify(updatedData))

    setAllRecord(updatedData)

    navigate(`/`)

    setFormInput({
      name: "",
      email: "",
      department: "",
      status: ""
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4 text-primary">Add New Record</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" onChange={handleChange} value={formInput.name} placeholder="Enter your name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" onChange={handleChange} value={formInput.email} placeholder="Enter your email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <select name="department" className="form-select" value={formInput.department} onChange={handleChange} required>
              <option value="">Select department</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label d-block">Status</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="status" value="Active" checked={formInput.status === "Active"} onChange={handleChange} />
              <label className="form-check-label">Active</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="status" value="Inactive" checked={formInput.status === "Inactive"} onChange={handleChange} />
              <label className="form-check-label">Inactive</label>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">Add Record</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add

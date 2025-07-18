import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"

const Edit = () => {
  const navigate = useNavigate()
  const { editId } = useParams()

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    department: "",
    status: ""
  })

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  useEffect(() => {
    if (editId) {
      const single = allRecord.find((val) => val.id == editId)
      setFormInput(single || {
        name: "",
        email: "",
        department: "",
        status: ""
      })
    }
  }, [editId, allRecord])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    Swal.fire({
      title: "Record Updated...",
      icon: "success",
      draggable: true
    });

    const updatedData = allRecord.map((val) => val.id == editId ? formInput : val)
    localStorage.setItem('data', JSON.stringify(updatedData))
    setAllRecord(updatedData)
    navigate(`/`)
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-success">Edit Record</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={formInput.name} placeholder="Enter Your Name..." required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" id="email" onChange={handleChange} value={formInput.email} placeholder="Enter Your Email..." required />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">Department</label>
              <select className="form-select" name="department" id="department" onChange={handleChange} value={formInput.department} required>
                <option value="">Select Department</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label d-block">Status</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="status" value="Active" id="active" onChange={handleChange} checked={formInput.status === "Active"} required />
                <label className="form-check-label" htmlFor="active">Active</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="status" value="Inactive" id="inactive" onChange={handleChange} checked={formInput.status === "Inactive"} required />
                <label className="form-check-label" htmlFor="inactive">Inactive</label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit

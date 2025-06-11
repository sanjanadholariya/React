import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const Add = () => {

  const navigate = useNavigate()

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    city: "",
    dateOfJoin: ""
  })

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      } else {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses].filter(val => val != value)
        })
      }
    }
    else {
      setFormInput({
        ...formInput,
        [name]: value
      })
    }


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



    const updatedData = [
      ...allRecord,
      withId
    ]

    localStorage.setItem('data', JSON.stringify(updatedData))

    setAllRecord(updatedData)

    navigate(`/`)

    setFormInput({
      name: "",
      email: "",
      password: "",
      gender: "",
      courses: [],
      city: "",
      dateOfJoin: ""
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
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" name="password" onChange={handleChange} value={formInput.password} placeholder="Enter your password" className="form-control" required />
          </div>

           <div className="mb-4">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input type="radio" name="gender" checked={formInput.gender === "male"} onChange={handleChange} value="male" className="form-check-input" id="genderMale" required />
              <label className="form-check-label" htmlFor="genderMale">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" name="gender" checked={formInput.gender === "female"} onChange={handleChange} value="female" className="form-check-input" id="genderFemale" required />
              <label className="form-check-label" htmlFor="genderFemale">Female</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label d-block">Courses</label>
            <div className="form-check form-check-inline">
              <input type="checkbox" name="courses" checked={formInput.courses.includes("c")} onChange={handleChange} value="c" className="form-check-input" id="courseC"  />
              <label className="form-check-label" htmlFor="courseC">C</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" name="courses"  checked={formInput.courses.includes("c++")} onChange={handleChange} value="c++" className="form-check-input" id="courseCpp"  />
              <label className="form-check-label" htmlFor="courseCpp">C++</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" name="courses" checked={formInput.courses.includes("python")} onChange={handleChange} value="python" className="form-check-input" id="coursePython"  />
              <label className="form-check-label" htmlFor="coursePython">Python</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" name="courses"checked={formInput.courses.includes("java")} onChange={handleChange} value="java" className="form-check-input" id="courseJava"  />
              <label className="form-check-label" htmlFor="courseJava">Java</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">City</label>
            <select name="city" onChange={handleChange} value={formInput.city} className="form-select" required>
              <option value="">---- Select City ----</option>
              <option value="surat">Surat</option>
              <option value="vapi">Vapi</option>
              <option value="vadodara">Vadodara</option>
              <option value="rajkot">Rajkot</option>
              <option value="jamnagar">Jamnagar</option>
              <option value="junagadh">Junagadh</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Date Of Join</label>
            <input type="date" name="dateOfJoin" onChange={handleChange} value={formInput.dateOfJoin} className="form-control" required />
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

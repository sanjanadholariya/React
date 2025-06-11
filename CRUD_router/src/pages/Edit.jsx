import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"

const Edit = () => {
  const navigate = useNavigate()
  const { editId } = useParams()

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    gender : "",
    courses : [],
    city : "",
    dateOfJoin : ""
  })

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('data')) || [])

  useEffect(() => {
    if (editId) {
      const single = allRecord.find((val) => val.id == editId)
      setFormInput(single || { name: "", email: "", password: "" })
    }
  }, [editId, allRecord])

  const handleChange = (e) => {
    const { name, value , type , checked} = e.target;
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

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" id="password" onChange={handleChange} value={formInput.password} placeholder="Enter Your Password..." required />
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

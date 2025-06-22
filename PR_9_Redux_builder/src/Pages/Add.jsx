import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/action/crudAction";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.crud.users)
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
        name: "",
        email: ""
    })
   
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const withId = {
            id: Math.floor(Math.random() * 10000),
            ...formInput
        }

        const allData = [...data, withId]

        dispatch(addData(allData))  


        setFormInput({
            name: "",
            email: ""
        })

        navigate(`/`)
    }


    return (
  <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#fdf6f9" }}>
  <div className="card shadow-lg border-0 p-4 rounded-4" style={{ backgroundColor: "#f0f4ff", maxWidth: "550px", width: "100%" }}>
    <h2 className="text-center text-muted mb-4 fw-bold" style={{ fontFamily: "serif" }}>➕ Add User</h2>

    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control border-0 rounded-3 bg-light"
          id="addName"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formInput.name}
          required
        />
        <label htmlFor="addName" className="text-muted">Full Name</label>
      </div>

      <div className="form-floating mb-4">
        <input
          type="email"
          className="form-control border-0 rounded-3 bg-light"
          id="addEmail"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formInput.email}
          required
        />
        <label htmlFor="addEmail" className="text-muted">Email Address</label>
      </div>

      <div className="d-grid">
        <button className="btn rounded-pill px-4 fw-semibold" style={{ backgroundColor: "#f7d1cd", color: "#6b4c4c" }}>
          🌸 Add
        </button>
      </div>
    </form>
  </div>
</div>

    )
}

export default Add
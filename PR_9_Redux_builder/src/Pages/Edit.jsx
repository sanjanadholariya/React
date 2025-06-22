import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/action/crudAction";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const data = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const [formInput , setFormInput] = useState({
      name : "",
      email : ""
    })
    
    useEffect(()=>{
      const single = data.find((val)=>{
        return val.id == id
      })
      setFormInput(single)
    },[id])

    const handleChange = (e) => {
      const {name , value} = e.target
      setFormInput({
        ...formInput,
        [name] : value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(editData(formInput))

      setFormInput({
        name : "",
        email : ""
      })

      navigate(`/`)


    }


    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#fdf6f9" }}>
  <div className="card shadow-lg border-0 p-4 rounded-4" style={{ backgroundColor: "#f0f4ff", maxWidth: "550px", width: "100%" }}>
    <h2 className="text-center text-muted mb-4 fw-bold" style={{ fontFamily: "serif" }}>✏️ Edit User</h2>

    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control border-0 rounded-3 bg-light"
          id="editName"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formInput?.name || ""}
          required
        />
        <label htmlFor="editName" className="text-muted">Full Name</label>
      </div>

      <div className="form-floating mb-4">
        <input
          type="email"
          className="form-control border-0 rounded-3 bg-light"
          id="editEmail"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formInput?.email || ""}
          required
        />
        <label htmlFor="editEmail" className="text-muted">Email Address</label>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn rounded-pill px-4 fw-semibold" style={{ backgroundColor: "#f7d1cd", color: "#6b4c4c" }}>
          💾 Save
        </button>

        <button type="button" onClick={() => navigate('/')} className="btn rounded-pill px-4 fw-semibold" style={{ backgroundColor: "#c4e3f5", color: "#3b3b3b" }}>
          ❌ Cancel
        </button>
      </div>
    </form>
  </div>
</div>


    )
}

export default Edit
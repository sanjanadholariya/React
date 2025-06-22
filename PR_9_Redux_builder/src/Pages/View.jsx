import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../redux/action/crudAction'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {
  const data = useSelector(state=> state.crud.users)
  console.log(data);
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  return (
 <div className="container py-5" style={{ backgroundColor: "#fdf6f9", minHeight: "100vh" }}>
  <div className="card shadow-lg p-4 rounded-4 border-0" style={{ backgroundColor: "#f0f4ff" }}>
    <h2 className="text-center mb-4 text-muted fw-bold" style={{ fontFamily: "serif" }}>👤 User List</h2>

    <div className="table-responsive">
      <table className="table table-bordered text-center align-middle table-hover">
        <thead style={{ backgroundColor: "#f7d1cd" }}>
          <tr>
            <th className="text-secondary">#ID</th>
            <th className="text-secondary">Name</th>
            <th className="text-secondary">Email</th>
            <th className="text-secondary">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index} className="bg-white">
              <td>{val.id}</td>
              <td className="fw-semibold">{val.name}</td>
              <td>{val.email}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-sm rounded-pill px-3"
                    style={{ backgroundColor: "#f7d1cd", color: "#5c4b4b" }}
                    onClick={() => dispatch(deleteData(val.id))}
                  >
                    🗑️
                  </button>
                  <button
                    className="btn btn-sm rounded-pill px-3"
                    style={{ backgroundColor: "#c4e3f5", color: "#35484b" }}
                    onClick={() => userEdit(val.id)}
                  >
                    ✏️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="text-center mt-4">
      <Link to="/add">
        <button className="btn rounded-pill px-4 py-2 fw-semibold" style={{ backgroundColor: "#f7d1cd", color: "#6b4c4c" }}>
          ➕ Add New
        </button>
      </Link>
    </div>
  </div>
</div>



  )
}

export default View
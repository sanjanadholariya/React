import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const View = () => {
  const [allRecord, setAllRecord] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data')) || []
    setAllRecord(data)
  }, [])

  const gotoEdit = (editId) => {
    navigate(`/edit/${editId}`)
  }

  const deleteUser = (deleteId) => {

    let timerInterval;
    Swal.fire({
      title: "Delete",
      html: "Record will delete in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    const updatedData = allRecord.filter(val => val.id != deleteId)
    console.log(updatedData);

    localStorage.setItem('data', JSON.stringify(updatedData))
    setAllRecord(updatedData)
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">View Records</h2>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow">
          <thead className="table-primary">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allRecord.map((val, index) => {
                if (!val) return null;
                const { id, name, email, password } = val
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2" onClick={() => gotoEdit(id)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteUser(id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <Link to={`/add`}><button className="btn btn-primary">Add More</button></Link>
      </div>
    </div>
  )
}

export default View

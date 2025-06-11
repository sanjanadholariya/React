import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const View = () => {

  const [sort , setSort] = useState({
    id : true,
    name : true,
    date : true
  })
  const [searchInput, setSearchInput] = useState({
    name: "",
    gender: "",
    city: ""
  })
  const [filterData, setFilterData] = useState([])
  const [allRecord, setAllRecord] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data')) || []
    setAllRecord(data)
  }, [])



  const changeInput = (e) => {
    const { name, value } = e.target
    const search = {
      ...searchInput,
      [name]: value
    }
    setSearchInput(search)

    let filter = allRecord.filter((val) => {
      return (
        val.name.toLowerCase().includes(search.name.toLowerCase()) &&
        val.gender.toLowerCase().includes(search.gender.toLowerCase()) &&
        val.city.toLowerCase().includes(search.city.toLowerCase())
      )
    })

    setFilterData(filter)
  }


  const displayData = () => {
    const isSearch = searchInput.name || searchInput.gender || searchInput.city;
    return isSearch ? filterData : allRecord
  }

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

  const handleSort = (type) => {

    let sortedData = [...allRecord]

    if(type == "id"){
      const data = sort.id
      sortedData = allRecord.sort((a,b) => {
        let idA = a.id
        let idB = b.id

        if(idA < idB){
          return data ? -1 : 1
        }

        if(idB < idA){
          return data ? 1 : -1
        }
      })

       setSort({
      id : !sort.id,
      name : true,
      date : true
    })
    }


    if(type == "name"){
      
      const data = sort.name
       sortedData = allRecord.sort((a , b)=>{
        let nameA = a.name
        let nameB = b.name

        if(nameA < nameB){
          return data ? -1 : 1
        }

        if(nameB < nameA){
          return data ? 1 : -1
        }
      })

       setSort({
      id : true,
      name : !sort.name,
      date : true
    })
    }

    if(type == "date"){
      let data = sort.date
      sortedData = allRecord.sort((a,b) => {
        let dateA = a.dateOfJoin
        let dateB = b.dateOfJoin

        if(dateA < dateB){
          return data ? -1 : 1
        }

        if(dateB < dateA){
          return data ? 1 : -1
        }
      })
     
      setSort({
        id : true,
        name : true,
        date : !sort.date
      })

    }


    
    setFilterData(sortedData)

   

  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">View Records</h2>
      </div>
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="search"
            name="name"
            className="form-control shadow-sm"
            placeholder="Search Name..."
            onChange={changeInput}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="search"
            name="gender"
            className="form-control shadow-sm"
            placeholder="Search Gender..."
            onChange={changeInput}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="search"
            name="city"
            className="form-control shadow-sm"
            placeholder="Search City..."
            onChange={changeInput}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow">
          <thead className="table-primary">
            <tr>
              <th onClick={() => handleSort("id")} scope="col" style={{cursor:"pointer"}}>Id   {sort.id ? "⬆️" : "⬇️"}</th>
              <th onClick={() => handleSort("name")} scope="col" style={{cursor:"pointer"}}>Name   {sort.name ? "⬆️" : "⬇️"}</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Gender</th>
              <th scope="col">Courses</th>
              <th scope="col">City</th>
              <th onClick={() => handleSort("date")} scope="col" style={{cursor:"pointer"}}>Date Of Join    {sort.date ? "⬆️" : "⬇️"}</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {

              displayData().map((val, index) => {
                if (!val) return null;
                const { id, name, email, password, gender, courses, city, dateOfJoin } = val
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{gender}</td>
                    <td>{Array.isArray(courses) ? courses.join(", ") : courses}</td>
                    <td>{city}</td>
                    <td>{dateOfJoin}</td>
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

import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([])
  const [formInput , setFormInput] = useState({
    record : "",
    name : ""
  })
  const getData = () => {
    fetch(`https://openlibrary.org/authors/OL23919A.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        console.log(res);

      })
  }

  const handleChange =(e) => {
    const {name , value} = e.target
    setFormInput({
      ...formInput,
      [name] : value
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div  align="center">

    <form className='mt-5 mb-5'>
      <div className="row">
        <div className="col-6"><input  className='form-control' type="text" name="record" onChange={handleChange} value={formInput.record} placeholder="Search Source Record..."/></div>
      
      <div className="col-6">
        <input  className='form-control' type="text" name="name" onChange={handleChange} value={formInput.name} placeholder="Search Alternate Names	" />
      </div>
      </div>
    </form>

      <table className='table table-striped-columns'>

        <thead>
          <tr className='row'>
            <th className='col-5'>Bio</th>
            <th className='col'>Entity type</th>
            <th className='col'>Title</th>
            <th className='col'>Person Name</th>
            <th className='col'>Source record</th>
            <th className='col'>Alternate Names</th>
            <th className='col'>Birth date</th>
            <th className='col'>Latest Revision</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr className='row'>
              <td className='col-5'>{data.bio}</td>
              <td className='col'>{data.entity_type}</td>
              <td className='col'>{data.title}</td>
              <td className='col'>{data.personal_name}</td>
              <td className='col' >
                
                <br />
                {
                  Array.isArray(data.source_records) && data.source_records.includes(formInput.record) ? formInput.record : "There Is No Data Found! First Search Source Record"
                }
              </td>
              <td className='col'>{
               Array.isArray(data.alternate_names) && data.alternate_names.includes(formInput.name) ? formInput.name : "First Search Alternate name"
                }</td>
              <td className='col'>{data.birth_date}</td>
              <td className='col'>{data.latest_revision}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

import { useState } from "react"

function App() {

  const [form, setForm] = useState([
    { name: "", email: "" }
  ])

  const addForm = () => {
    setForm([...form, { name: "", email: "" }])
  }

  const handleSubmit = () => {
    console.log(form);
    
  }


  const handleChange = (index, e) => {
    const { name, value } = e.target
    let field = [...form]
    field[index][name] = value
    setForm(field)
  }

  const removeForm = (index, e) => {
    e.preventDefault();
    // console.log(index);
    const filterData = form.filter((val, i) => i != index)
    setForm(filterData);
  }

  return (
    <div align="center">
      <h1>Dynamic Form</h1>
      {
        form.map((val, index) => {
          return (
            <div key={index}>
              <form >
                <table border={1}>
                  <tbody>
                    <tr>
                      <td>Name :-</td>
                      <td>
                        <input type="text" onChange={(e) => handleChange(index, e)} name="name" placeholder="Enter Your Name" />
                      </td>
                    </tr>
                    <tr>
                      <td>Email :-</td>
                      <td>
                        <input type="text" onChange={(e) => handleChange(index, e)} name="email" placeholder="Enter Your Email" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                {
                  index != 0 && (
                    <button onClick={(e) => removeForm(index, e)}>Remove</button>
                  )
                }
              </form>
              <br />
              <hr />
              <br />
            </div>
          )
        })
      }

      <button onClick={() => addForm()}>Add</button>&nbsp;&nbsp;
      <button onClick={() => handleSubmit()}>Submit</button>

    </div>
  )
}

export default App

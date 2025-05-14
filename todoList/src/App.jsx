import { useState } from "react";

function App() {

  const [input, setInput] = useState({
    id: "",
    task: ""
  })
  const [todolist, setTodolist] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("hello")
    console.log(input);

    setTodolist([...todolist, input])

    setInput({
      id: "",
      task: ""
    })


  }


  const handleChange = (e) => {
    const { name, value } = e.target
    const obj = {
      ...input,
      [name]: value
    }
    setInput(obj)

  }

  return (
    <div align="center">

      <h1>TO Do App</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>ID :- </td>
              <td>
                <input type="text" name="id" value={input.id} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Task :- </td>
              <td>
                <input type="text" name="task" value={input.task} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </tbody>
        </table>
      </form>

    </div>
  )
}

export default App

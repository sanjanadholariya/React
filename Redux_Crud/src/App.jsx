import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./View"
import Add from "./Add"
import Edit from "./Edit"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

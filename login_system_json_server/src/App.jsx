import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import Login from "./Pages/Login"

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Add from "./pages/Add"
import View from "./pages/View"
import Header from './Components/Header'
import Edit from './pages/Edit'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header/>

        <Routes>
          <Route path="/" element={<View/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path='/edit/:editId' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
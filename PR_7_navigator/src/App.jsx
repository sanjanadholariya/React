import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Add from "./Pages/Add"
import View from "./Pages/View"
import Header from './components/Header'
import Edit from './Pages/Edit'

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
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import View from './pages/View'
import Edit from './pages/Edit'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
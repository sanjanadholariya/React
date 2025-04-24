import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Props from './Demo_props/Props';


function App() {
  let a = 10;
  let b = 20;
  let arr = ["pink","red","black","green","purple","blue"];

  const calc = (a,b) => {
    
    return a+b
  }
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/Props' element={<Props
                                          a={a}
                                          b={b}
                                          arr ={arr} 
                                          calc = {calc}/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

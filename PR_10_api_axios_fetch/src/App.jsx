import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Recipes from "./Pages/Recipes";
import Index from "./Pages/Index";

function App() {

  return (
    
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

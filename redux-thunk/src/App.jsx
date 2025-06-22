import { BrowserRouter, Route, Routes } from "react-router-dom"
import Post from "./pages/post"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Recipes from "./pages/Recipes"
import Users from "./pages/Users"


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/recipe" element={<Recipes/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

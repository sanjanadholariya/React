import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <>
     <div>Navbar</div>
     <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
     </ul>
   </>


  )
}

export default Navbar
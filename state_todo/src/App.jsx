import { useState } from "react"
import Todo from "./todo"


function App() {

  const [arr , editArr] = useState(["red" , "orange" , "pink" , "black" , "green"])

  return (
    
    <>
      <Todo array = {arr}/>
    </>
  )
}

export default App

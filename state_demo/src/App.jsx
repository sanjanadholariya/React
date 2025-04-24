import { useState } from "react";
import Counter from "./Counter";
import ToggleButton from "./toggle";
import ToggleText from "./toggle_text"


function App() {

  const [count,updateCount] = useState(0)

  const Add = () => {
    
    updateCount(count+1)
    
  }

  const minus = () => {
    updateCount(count-1)
  }

  const reset = () => {
    updateCount(0)
  }

  return (
   <>
     <Counter
      add = {Add}
      count = {count}
      minus = {minus}
      reset = {reset}
     />
     <ToggleButton/>
     <ToggleText/>
   </>
  )
}

export default App

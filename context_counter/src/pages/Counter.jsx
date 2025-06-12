import { useContext } from "react"
import  { myCounterContext } from "../context/CounterContext"

const Counter = () => {
    const {no , Increment , Decrement} = useContext(myCounterContext)
    console.log(no);
    
  return (


    <>
        <div>Counter :- {no}</div>
    <button onClick={() => Increment()}>+</button>
    <button onClick={() => Decrement()}>-</button>
    </>
  )
}

export default Counter
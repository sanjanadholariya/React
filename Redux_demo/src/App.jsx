import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment, Reset } from "./redux/action/CounterAction";

function App() {

  let no = useSelector(state => state.cnt)
  let dispatch = useDispatch();

  return (
    <div align="center">
      <h1>Counter App</h1>
      <h2>Count :- {no}</h2>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default App

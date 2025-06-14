import React, { useContext } from 'react'
import { CounterContext } from '../contex/CounterProvider'

const Counter = () => {
    const { no, Increment, Decrement ,Reset } = useContext(CounterContext)
    console.log(no);

    return (
        <div>
            <div>Count :- {no}</div>
            <button onClick={() => Increment()}>+</button>
            <button onClick={() => Decrement()}>-</button>
            <button onClick={() => Reset()}>Reset</button>
        </div>
    )
}

export default Counter
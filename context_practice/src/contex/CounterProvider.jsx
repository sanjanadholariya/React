import { createContext, useState } from "react"

export const CounterContext = createContext()
const CounterProvider = ({children}) => {
    const [no , setNo] = useState(0)

    const Increment = () => {
        setNo(no + 1)
    }

    const Decrement = () => {
        setNo(no - 1)
    }

    const Reset = () => {
        setNo(0)
    }

  return (
    <CounterContext.Provider value={{no , Increment , Decrement , Reset}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
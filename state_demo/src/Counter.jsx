const Counter = ({count , add , minus , reset}) => {
    return(
        <>
            <div align="center">
                <h1>Conter App</h1>
                <h2>Count :- {count}</h2>
                <button onClick={add}>+</button>
                <button disabled={count==0} onClick={minus}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    )
}
export default Counter;
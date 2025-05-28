import HOC from "./HOC"

const B = ({no , handleButton}) => {
    return(
        <div align="center">
            <h1>-: Component B :-</h1>
            <h2>Count :- {no}</h2>
            <button onClick={ () => handleButton()}>+</button>
        </div>
    )
}
let ComponentB = HOC(B)
export default ComponentB
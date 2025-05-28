import HOC from "./HOC"

const A = ({no , handleButton}) => {
    
    return(
        <div align="center">
            <h1>-: Component A :-</h1>
            <h2>Count :- {no}</h2>
            <button onClick={ () => handleButton()}>+</button>
        </div>
    )
}
let ComponentA = HOC(A)     // function me pass krte time jo hm couse me likhte hai use argument
export default ComponentA   // hame normal A function ko return nahi krna hai hme logic k sath jo HOC ne pura component A return kiya hai usiko export krna hai 
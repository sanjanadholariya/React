import ThemeHOC from "./ThemeHOC"

const A = ({theme}) => {
    return(
        <>
            <h1>this is {theme} theme</h1>
        </>
    )
}

let ThemeA = ThemeHOC(A)
export default ThemeA
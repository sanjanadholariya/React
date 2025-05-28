import { useState } from "react";

const ThemeHOC = (WrappedComponent) => {
    return() => {
        const [theme , setTheme] = useState("light")

        const handleTheme = () => {
            setTheme((val) => (val === "light" ? "dark" : "light"))
        }

       return(
        <div style={{backgroundColor : theme == "light" ? "white" : "black" , color : theme == "light" ? "black" :"white" , height : "100vh"}}>
            <button style={{cursor:"pointer"}} onClick={() => handleTheme()}>toggle theme</button>
            <WrappedComponent 
                theme = {theme}/>

        </div>
       )
    }
}

export default ThemeHOC;
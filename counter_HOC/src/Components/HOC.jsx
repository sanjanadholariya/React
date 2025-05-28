import { useState } from "react"

const HOC = (WrappedComponent) => { // ab yaha pr jo function me argument pass ki hoti hai wo jb milti hai to use parameter
    return () => {
        const [no,setNo] = useState(0);

        const handleButton = () => {
            setNo(no + 1)
        }

        return(
            <WrappedComponent 
            no = {no}
            handleButton = {handleButton}/>
        )

    }
}
export default HOC
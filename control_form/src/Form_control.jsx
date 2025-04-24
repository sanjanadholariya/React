import { useRef } from "react";

const Form = () => {

    const name = useRef("")
    const age = useRef("")

    const handleForm = (e) => {
        e.preventDefault()
     
        console.log(name.current.value);
        console.log(age.current.value);
        
        

    }

    return (
        <>
            <div align="center">

                <form onSubmit={handleForm}>

                    <table border={1}>
                        <tbody>
                             
                        </tbody>
                    </table>

                </form>

            </div>
        </>
    )
}
export default Form;
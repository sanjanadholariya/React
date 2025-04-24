const Todo = ({array}) => {
   
    return(
        <>
        <ul>

        
        
            {
                array.map((value,index)=>{
                    
                     return(
                        <li key={index}>{value}</li>
                     )
                    
                })
            }

            </ul>
        </>
    )
}
export default Todo;
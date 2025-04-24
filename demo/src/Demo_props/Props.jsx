const Props = ({a , b , arr , calc}) => {
   
    return(
        <>
            A = {a},
            B = {b}
            {
                arr.map((val)=>{
                    return(
                        <ul>
                            <p style={{color:val}}>{val}</p>
                        </ul>
                    )
                })
            }
            <h1>Sum :- {calc(10,20)}</h1>
        </>
    )
}

export default Props;
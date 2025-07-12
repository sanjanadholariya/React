const REGESTER_USER = (formInput) => {
    return async(dispatch)  => {
        try {
            const data = await fetch(`http://localhost:3000/users`,{
                method : "POST",
                headers:{
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(formInput)
            })
            const res = data.json();
            console.log(res);

            dispatch({
                type : "registerUser",
                payload : res
            })
            
        } catch (err) {
           dispatch({
            type : "resiterErr",
            payload : err
           })

        }
    }
}

export { REGESTER_USER }
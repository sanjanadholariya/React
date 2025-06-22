const ADD_DATA = (formInput) => {
    return async (dispatch) => {
        try {
            if (formInput) {
                await fetch(`http://localhost:3000/data`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(formInput)
                })
            }
            const data = await fetch(`http://localhost:3000/data`)
            const res = await data.json();
            console.log(res);

            dispatch({
                type: "addData",
                payload: res
            })


        }
        catch (err) {
            dispatch({
                type: "addErr",
                payload: err
            })
        }
    }
}

const DELETE_DATA = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:3000/data/${id}`, {
                method: "DELETE",
            })
            const data = await fetch(`http://localhost:3000/data`)
            const res = await data.json();
            dispatch({
                type: "deleteData",
                payload: res
            })
        }
        catch (err) {
            dispatch({
                type: "deleteErr",
                payload: err
            })
        }

    }
}

export { ADD_DATA , DELETE_DATA}
import { useEffect, useState } from "react";

const Api = () => {

    const [info, setInfo] = useState([])

    const data = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setInfo(data.products);
                // console.log(data.products);
            })
    }

    useEffect(() => {
        data();

    }, [])

    return (
        <>

            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DISCTIPTION</th>
                    <th>PRICE</th>
                    <th>RATING</th>
                    <th>REVIEWS</th>
                </tr>
                {
                    info.map((val, index) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.description}</td>
                                <td>{val.price}</td>
                                <td>{val.rating}</td>
                                <td>
                                    {
                                        val.reviews.map((val) => {
                                            return (
                                                <ul>
                                                    <li>Rating :- {val.rating}</li>
                                                    <li>Comment :- {val.comment}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </table>



        </>
    )
}

export default Api;
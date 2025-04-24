const Carts = ({ carts }) => {
    return (
        <>
            <h1 align="center">CARTS</h1>
            <table border={1} align="center">
                <tr align="center">
                    <th>ID</th>
                    <th>PRODUCTS</th>
                    <th>TOTAL</th>
                    <th>TOTAL PRODUCTS</th>
                    <th>TOTAL QUANTITY</th>
                    <th>USER ID</th>
                </tr>
                {
                    carts.map((val , index) => {
                        return (
                            <tr key={index}>
                                <td align="center">{val.id}</td>
                                <td align="center">
                                    <tr>
                                        <th>ID</th>
                                        <th>TITLE</th>
                                        <th>PRICE</th>
                                    </tr>
                                    {
                                        val.products.map((val , index )=> {
                                            return (
                                               

                                                    <tr key={index}>
                                                        <td align="center">{val.id}</td>
                                                        <td align="center">{val.title}</td>
                                                        <td align="center">{val.price}</td>
                                                    </tr>
                                                
                                            )
                                        })
                                    }
                                </td>
                                <td align="center">{val.total}</td>
                                <td align="center">{val.totalProducts}</td>
                                <td align="center">{val.totalQuantity}</td>
                                <td align="center">{val.userId}</td>

                            </tr>
                        )
                    })
                }

            </table>
        </>
    )
}

export default Carts;
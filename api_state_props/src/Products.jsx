
const Products = ({product}) => {

    

    return (

        <>

            <h1 align="center">PRODUCTS</h1>

            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>IMAGES</th>
                    <th>REVIEWS</th>

                </tr>
                {
                    product.map((val , index) => {
                        
                        return(
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.description.slice(0,10)}</td>
                                <td>
                                {
                                    val.images.map((img, index)=>{
                                        return(
                                            
                                                <img src={img} alt="" width={150}/>
                                           
                                        )
                                    })
                                }
                                 </td>
                                 <td>
                                    <table border={1}>
                                        <thead>
                                            <tr>
                                                <th>RATING</th>
                                                <th>COMMENT</th>
                                                <th>DATE</th>
                                                <th>NAME</th>
                                                <th>EMAIL</th>
                                            </tr>
                                          
                                                {
                                                    val.reviews.map((r , id)=>{
                                                        return(
                                                            <tr>
                                                                <td>{r.rating}</td>
                                                                <td>{r.comment}</td>
                                                                <td>{r.date}</td>
                                                                <td>{r.reviewerName}</td>
                                                                <td>{r.reviewerEmail}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                           
                                        </thead>
                                    </table>
                                 </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>

    )
}

export default Products;
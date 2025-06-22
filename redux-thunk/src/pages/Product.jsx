import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProduct from '../redux/action/ProductAction'
import { Link } from 'react-router-dom';


const Product = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.product.product)
    console.log(data);
     
    useEffect(()=>{
        dispatch((getProduct()))
    },[])
  return (
    <div align="center">
         <br />

            <div>
                <Link to="/">Post</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/cart">Cart</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/product">Product</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/recipe">Recipe</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/users">Users</Link>
                

            </div>
            <br /><br /><hr />
            {
                data.length === 0 && <p>Loading...</p>
            }
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val,index)=>{
                        const {id , title , description} = val
                        return(
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Product
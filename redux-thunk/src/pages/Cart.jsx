import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCart from '../redux/action/CartAction'
import { Link } from 'react-router-dom';


const Cart = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.cart.cart.carts)
  console.log(data);


  useEffect(() => {
    dispatch(getCart())
  }, [])

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
           
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCTS</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((val, index) => {
              const { id, products, total } = val
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>
                    <tr>
                      <th>ID</th>
                      <th>TITLE</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                    </tr>
                    {
                      products && products.map((val, index) => {
                        const {id , title , price ,quantity, total} = val

                        return (
                          <tr key={index}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{quantity}</td>
                            <td>{total}</td>
                          </tr>
                        )
                      })
                    }
                  </td>
                  <td>{total}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cart
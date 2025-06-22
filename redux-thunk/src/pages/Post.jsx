import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_POST } from '../redux/action/PostAction'
import { Link } from 'react-router-dom';


const Post = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.post.post)
    console.log(data);

    useEffect(()=>{
      dispatch(GET_POST())
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
        {
          data.map((val , index)=>{
            return(
              <div key={index}>
                <span>{val.id}</span>
                <p>{val.title}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Post
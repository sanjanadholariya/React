import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getUsers from '../redux/action/UsersAction';
import { Link } from 'react-router-dom';

const Users = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.users.users.users)
    console.log(data);


    useEffect(() => {
        dispatch(getUsers())
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
                        <th>USERNAME</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>UNIVERSITY</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((val, index) => {
                            const { id, username, firstName, lastName, age, email, university, image } = val;
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{username}</td>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{age}</td>
                                    <td>{email}</td>
                                    <td>{university}</td>
                                    <td>
                                        <img src={image} alt="" />
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users
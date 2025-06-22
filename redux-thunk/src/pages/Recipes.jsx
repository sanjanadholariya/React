import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getRecipe from '../redux/action/RecipesAction'
import { Link } from 'react-router-dom';


const Recipes = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.recipe.recipe)
    console.log(data);


    useEffect(() => {
        dispatch(getRecipe())
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

            {
                data.length === 0 && <p>Loading...</p>
            }

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>INGREDIENTS</th>
                        <th>INSTRUCTIONS</th>
                        <th>MEAL TYPE</th>
                        <th>RATING</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((val, index) => {
                            const { id, name,image, ingredients, instructions, mealType, rating } = val
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        <img src={image} alt="" height={200} width={200} />
                                    </td>
                                    <td>
                                        <ul>
                                            {
                                                ingredients.map((val, index) => {
                                                    return (
                                                        <li key={index}>{val}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </td>
                                    <td>
                                        <ol >
                                            {
                                                instructions.map((val, index) => {
                                                    return(
                                                        <li key={index}>{val}</li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </td>
                                    <td>{mealType}</td>
                                    <td>{rating}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Recipes
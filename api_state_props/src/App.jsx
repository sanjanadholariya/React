import Products from './Products'
import { useEffect, useState } from "react";
import Carts from './Carts';
import Recipes from './Recipes';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import Todos from './Todos';
import Quotes from './Quotes';


function App() {

  const [product, updateProduct] = useState([])
  const [carts, updateCarts] = useState([])
  const [recipes, updateRecipes] = useState([])
  const [users, updateUsers] = useState([])
  const [posts, updatePosts] = useState([])
  const [comments, updateComments] = useState([])
  const [todos, updateTodos] = useState([])
  const [quotes , updateQuotes] = useState([])

  const getProducts = () => {
    fetch(`https://dummyjson.com/products`)
      .then((data) => data.json())
      .then((data) => {
        updateProduct(data.products)



      })
  }

  const getCarts = () => {
    fetch(`https://dummyjson.com/carts`)
      .then((data) => data.json())
      .then((data) => {
        updateCarts(data.carts)

      })
  }

  const getRecipes = () => {
    fetch(`https://dummyjson.com/recipes`)
      .then((data) => data.json())
      .then((data) => {
        updateRecipes(data.recipes)

      })
  }

  const getUsers = () => {
    fetch(`https://dummyjson.com/users`)
      .then((data) => data.json())
      .then((data) => {
        updateUsers(data.users)
      })
  }

  const getPosts = () => {
    fetch(`https://dummyjson.com/posts`)
      .then((data) => data.json())
      .then((data) => {
        updatePosts(data.posts)
      })
  }

  const getComments = () => {
    fetch(`https://dummyjson.com/comments`)
      .then((data) => data.json())
      .then((data) => {
        updateComments(data.comments)
      })
  }

  const getTodos = () => {
    fetch(`https://dummyjson.com/todos`)
      .then((data) => data.json())
      .then((data) => {
        updateTodos(data.todos)
      })
  }

  const getQuotes = () => {
    fetch(`https://dummyjson.com/quotes`)
    .then((data)=>data.json())
    .then((data)=>{
      updateQuotes(data.quotes)
    })
  }

  useEffect(() => {
    getQuotes();
    getProducts();
    getCarts();
    getRecipes();
    getUsers();
    getPosts();
    getComments();
    getTodos();
  }, [])




  return (
    <>
      <Recipes
        recipes={recipes}
      />
      <Products
        product={product}
      />
      <Carts
        carts={carts}
      />

      <Users
        users={users}
      />
      <Posts
        posts={posts}
      />
      <Comments
        comments={comments}
      />
      <Todos
        todos={todos}
      />
      <Quotes
        quotes = {quotes}
      />
    </>
  )
}

export default App

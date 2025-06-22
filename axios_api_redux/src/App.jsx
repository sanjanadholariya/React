import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import GET_TODO from "./redux/Action/toDoAction";
import GET_QUOTES from "./redux/Action/quotesAction";


function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.todos.todo)
  console.log(data);

  const quoteData = useSelector(state => state.quote.quote)
  console.log(quoteData);
  

  useEffect(()=>{
    dispatch(GET_QUOTES())
  },[])


  useEffect(() => {
    dispatch(GET_TODO())
  }, [])

  return (
    <div align="center">
      <h1>TODO</h1>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>TODO</th>
              <th>COMPLETED</th>
              <th>USER_ID</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length === 0 ? "Loading...." : data.map((val, index) => {
                const { id, todo, completed, userId } = val
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{todo}</td>
                    <td>{completed ? "true" : "false"}</td>
                    <td>{userId}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>

      <h1>Quotes</h1>
      <hr /><br />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>QUOTE</th>
            <th>AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          {
            quoteData.length== 0 ? "Loading..." : quoteData.map((val,index)=>{
              const {id , quote , author} = val;
              return(
                <tr key={index}>
                  <td>{id}</td>
                  <td>{quote}</td>
                  <td>{author}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

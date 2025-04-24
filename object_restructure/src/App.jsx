function App() {

  let obj = [
    {
      id : 1,
      name : "sanjana",
      surname : "dholariya"
    },
    {
      id : 2,
      name : "prince" ,
      surname : "dholariya"
    },
    {
      id :3 ,
      name : "ravi" ,
      surname : "vora"
    }
  ]

  return (
    <>
      
                <table border={1}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>SURNAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      {
                        obj.map((val , index)=>{
                          let {id , name , surname} = val
                          return(
                                <tr key={index}>
                                  <td>{id}</td>
                                  <td>{name}</td>
                                  <td>{surname}</td>
                                </tr>
                          )
                        })
                      }
                    
                  </tbody>
                </table>
            
    </>
  )
}

export default App

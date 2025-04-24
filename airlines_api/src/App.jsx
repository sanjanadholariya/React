import { useEffect, useState } from "react"
import Airport from "./Airport"


function App() {

  const [airport , updatedAirport] = useState([])

  const getAirport = () => {
    fetch(`https://www.freetestapi.com/api/v1/airports`)
    .then((data)=>data.json())
    .then((data)=>{
      updatedAirport(data)
      console.log(data);
      
    })
  }

  useEffect(()=>{
    getAirport();
  },[])

  return (
    <>
      <Airport
        airport = {airport}
      />
    </>
  )
}

export default App

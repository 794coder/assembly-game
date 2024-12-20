// import Header from "./components/Header"
// import Main from "./components/Main"

import { useEffect, useState } from "react"

export default function App(){
  const [starWar,setStarWar]=useState({})
  const [count, setCount] = useState(0)
  useEffect(()=>{
    fetch("https://swapi.dev/api/people/1").
    then(res=>res.json()).
    then(data=>setStarWar(data))
    console.log("Effect function ran")
  },[count])
  return(
    <>
      {/* <Header/>
      <Main/> */}
       <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
          <pre>{JSON.stringify(starWar, null, 2)}</pre>
    </>
  )
}
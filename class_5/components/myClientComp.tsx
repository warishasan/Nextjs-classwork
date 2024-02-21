"use client"

import { useState } from "react"
import MyComp from './myComponent'

export default  function Page() {

    const [myState,setMyState] = useState(0)
    
  
   
    return (<div>
      <p>{myState}</p>
    
      <button onClick={()=>setMyState(myState+1)}>click me</button>
      <MyComp/>
      
    </div>)
  }
import React, { useRef, useState } from 'react'
import UseRef2 from './UseRef2';
export default function Useref() {
    const [count,setCount]=useState(0);
    

  return (
    <div>
      <center> hello</center>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <UseRef2 count={count}/>
      
    </div>
  )
}
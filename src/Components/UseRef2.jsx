import React, { useEffect, useRef } from 'react'

export default function UseRef2({count}) {
    const preValueRef=useRef();
    useEffect(()=>{preValueRef.current=count;
       

    },[count]);
    const preValue=preValueRef.current;
    
  return (
    <div>
        <p> current value{count}</p>
        <p> previous value {preValue}</p>
    </div>
  )
}

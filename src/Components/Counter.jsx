import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
    const [change,setChange]=useState(1);
    const decrementHandler=()=>{
            setCount(count-change);
        }
    const resetHandler =()=>
    {
        setCount(0);
        setChange(1);
    }
    const incrementHandler =()=>
    {
        setCount(count+Number(change));
    }
    const valueOnchange =(e)=>
    {
        setChange(e.target.value); 
    }
  return (
    <div className='counter-container'>
      <p className='counter-display'>{count}</p>
      <button className='counter-button' onClick={decrementHandler}>{change<=-1||change>=1?`Decrement by ${change}`:`Decrement`}</button>
      <button className='counter-button' onClick={resetHandler}>Reset</button>
      <button className='counter-button' onClick={incrementHandler}>{change<=-1||change>=1?`Increment by ${change}`:`Increment`}</button><br></br>
      <form action="">
         <input className='counter-change' value={change} onChange={valueOnchange} type='number'/>
      </form>
      
     
    </div>
  )
}

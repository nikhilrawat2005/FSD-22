import { useEffect, useRef, useState } from "react";

const Counter = () => {
    // let count=0;
    const [count,setCount]=useState(0)
    const [message,setMessage]=useState("")
    const renderCount=useRef(0);
    function increment(){
        // ++count;
        // setCount(count+1);
        setCount((prev)=>prev+1)
        console.log("Count=",count)
    }
    const decrement=()=>{
        // --count;
        // setCount(count-1);
        setCount((prev)=>prev-1)
        console.log("Count=",count)
    }
    useEffect(()=>{
        renderCount.current++;
     setMessage(`Updated Count=${count}`)
    },[count])
  return (
    <div>
        <h1>Counter App</h1>
    <div className="counter">
      <button className="btn" onClick={increment}>+</button>
      <div className="count">{count}</div>
      <button className="btn" onClick={decrement}>-</button>
    </div>
    <h2>{message}</h2>
    <h2>Render Count={renderCount.current}</h2>
    </div>
  )
}

export default Counter
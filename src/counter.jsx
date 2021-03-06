import React, {  useState} from "react";
import './counter.css';

function Counter(){
        const [count, setCount] = useState(0);


        
    
    return (
        <>
        <div className="counter_inner">

      <button onClick={()=>setCount(count -1)}>-</button>
      <div className="count" style={{color :  count <5 ? "red"  : count>100 ? "green" : "" }}>{count}</div>
      <button onClick={()=>setCount(count +1)}>+</button>
        </div>
        </>
    );

}

export default Counter;
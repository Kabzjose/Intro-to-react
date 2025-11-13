import  { useState } from "react";
function Counter({}){
    const [count,setCount]=useState(0);
    //count=current value
    //setCount= function to update the count value
    return(
       <div>
        <h2>count: {count}</h2>
        <button onClick={()=>setCount(count +1)}>Increase</button>
        <button onClick={()=>setCount(count -1)}>Decrease</button>
        <button onClick={()=> setCount(0)}>Reset</button>
       </div>
    )
}
export default Counter;
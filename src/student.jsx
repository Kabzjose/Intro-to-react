import  { useState } from "react";
function LikeButton({}){
    const [count,setCount]=useState(0);
    //count=current value
    //setCount= function to update the count value
    return(
       <div
        style={{
            textAlign:"center",
            marginTop:"20px",
            fontFamily:"Arial, sans-serif",
        }}>
      <h2>❤️ LIKE</h2>
      <button
        onClick={()=>setCount(count+1)}
        style={{
          backgroundColor: "#ff4d6d",
          border: "none",
          color: "white",
          padding: "12px 24px",
          fontSize: "18px",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.2s, background-color 0.3s",
        }}>
           ❤️ Like  
      </button>
      <h3 style={{ marginTop: "20px", fontSize: "22px" }}>
        Likes: {count}
      </h3>
        
       </div>
    )
}
export default LikeButton;
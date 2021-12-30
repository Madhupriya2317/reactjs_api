import React, { useState } from "react";

export default function ButtonCount(){
    var[num,setNum] = useState(0);
    

function handlePlus(){
    setNum(num + 1);
}    

function handleMinus(){
     setNum(num-1);
} 
    return(
        <div className="count">
            <h1>{num}</h1>
                <button className="minus" disabled={num<=0} onClick={handleMinus}>-</button>
                 <button className="plus" onClick={handlePlus}>+</button>
        </div>
    )
}
import React from "react";


export default function AddButton({handleInc}){
    return(
        <div>
             <button onClick={handleInc}>Add To Cart</button>
        </div>
    )
}
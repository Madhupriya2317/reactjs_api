import React from "react";

export default function ListMapping({listData,handleList,handleRemove}){


    return(
        <div>
            {listData.map((l)=>
            <div className='colorlist' key={l}>
                <button onClick={()=>handleList(l)}>{l}</button>
                <span><button className="remove" onClick={()=>handleRemove(l)}>Remove</button></span><br />
            </div>
          )}
        </div>
    )
}
import React from "react";

export default function ListMapping({listData,handleList}){
    return(
        <div>
            {listData.map((l)=>
            <div className='colorlist' key={l}>
                <button onClick={()=>handleList(l)}>{l}</button><span><button className="remove">Remove</button></span><br />
                
            </div>
          )}
        </div>
    )
}
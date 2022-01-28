import React, { useState } from 'react';
import ListMapping from './listmapping';

export default function ListArray(){

    const[listData,setListData] = useState(["RED","GRAY","GREEN","PINK","VIOLET","YELLOW","BLUE","PEACH","PURPLE","ORANGE"]);
    
    function handleList(color){
       
        console.log(color);
        alert(`New ${color} added to the Array`);
        // setListData([...listData,`New ${color}`])
        setListData(listData.concat(color))
    }

 return(
        <div className='list'>
            <h1>ARRAY LIST</h1>
            <ListMapping listData = {listData} handleList = {handleList} />
        </div>
 )
}
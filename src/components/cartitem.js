import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import actions from "../redux/count/actions";
import cartactions from "../redux/cartid/actions";

export default function Cartitem(){
  const[cartdata,setCartdata] = useState([]);
  var[sameProductCount,setSameProductCount] =useState([]);
  const dispatch = useDispatch();
    const Id = useSelector(
        (state) => state.cartReducer
    );
    const count = useSelector(
        (state) => state.counterReducer
    );
  
useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            setCartdata(res.data);
        }).catch((err)=>{
            return err;
        })
},[]);

useEffect(()=>{  
  //count the same values count
   const countValue = {};
   [...Id.id].forEach((x)=>{
       countValue[x] = (countValue[x] || 0) + 1;
   })
   setSameProductCount(countValue)
},[Id.id]);

function handleIncrease(IncId){
        var addId = JSON.parse(window.localStorage.getItem("cartId"))
        var finalId = [...addId,IncId];
        window.localStorage.setItem("cartId",JSON.stringify(finalId));
        dispatch({ type: cartactions.CART_ID,id : finalId})

        const add = count.count + 1;
         dispatch({ type: actions.INCREMENT_COUNTER,count : add});
}

 function handleDecrease(DecId){
    const add = count.count - 1;
    dispatch({ type: actions.INCREMENT_COUNTER,count : add})
    //Remove the clicked id from array
   let array = [...Id.id]
   let index = Id.id.findIndex(id => id === DecId)
   if(index !== -1){
    array.splice(index,1)
    }
    window.localStorage.setItem("cartId",JSON.stringify(array));
    dispatch({ type: cartactions.CART_ID,id : array})
 }

function handleDelete(deleteId){
    const add = count.count - 1;
    dispatch({ type: actions.INCREMENT_COUNTER,count : add})
    //Remove the clicked id from array
   let array = [...Id.id]
   let index = Id.id.findIndex(id => id === deleteId)
   if(index !== -1){
    array.splice(index,1)
    }
    window.localStorage.setItem("cartId",JSON.stringify(array));
    dispatch({ type: cartactions.CART_ID,id : array})
}

return(
        <div className='cartdata'>
            {cartdata.filter(val=>{
                for(let i=0; i<=20; i++){
                    if(val.id === Id.id[i]){
                       return val;
                    }
                } 
                }).map((data)=>{
                return(
            <div className="filteredCart" key={data.id}>
                  
                <div className='cartcontent'>
                    <h6><b>{data.title}</b></h6>
                    <span><p> <FontAwesomeIcon className="icon2" icon={faRupeeSign} /><b> {data.price * sameProductCount[`${data.id}`]}</b></p></span>
                </div>
                <div>
                     <img width={55} height={55} src={data.image} alt="Cart"/>
                  </div>
                  <div className='Cartcount'>
                    <div className='Singlecount'>
                        <button className='count1' onClick={()=>handleDecrease(data.id)}> - </button>
                        <span><b>
                            {sameProductCount[`${data.id}`]}
                        </b></span>
                        <button className='count1' onClick={()=>handleIncrease(data.id)}> + </button>  
                    </div>
                    <div className='trashicon'>
                        <button onClick={()=>handleDelete(data.id)}><FontAwesomeIcon className='trashicon' icon={faTrashAlt} /></button><hr className='line'/>
                    </div>
                </div>
            </div>
            )}
            )}
        </div> 
    )
}
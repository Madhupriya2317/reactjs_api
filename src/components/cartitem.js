import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign,faTrashAlt,faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import actions from "../redux/count/actions";
import cartactions from "../redux/cartid/actions";
import {useNavigate}from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

export default function Cartitem(){
  const[cartdata,setCartdata] = useState([]);
  var[show,setShow] = useState(false);
  let navigate = useNavigate();
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
            setShow(true)
        }).catch((err)=>{
            return err;
        })
},[]);

useEffect(()=>{
    //Find same values in array
   var countData =  [...Id.id].filter((val,a) => {
     return [...Id.id].indexOf(val) !== a
   })
  //count the same values count
   const countValue = {};
   [...Id.id].forEach((x)=>{
       countValue[x] = (countValue[x] || 0) + 1;
   })
})

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

function handleBack(){
    navigate('/product')
}


return(
    <>
     {(!show) ?
            <div className="loading">
                <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> 
            </div> :
        <div className='cartdata'>
            <div className='back'>
            <button onClick={handleBack}><FontAwesomeIcon className='backicon' icon={faArrowCircleLeft} /><span>Back</span></button>
            </div>
            {cartdata.filter(val=>{
                for(let i=0; i<=20; i++){
                    if(val.id === Id.id[i]){
                       return val;
                    }
                } 
            }).map((data)=>
            <div className="filteredCart" key={data.id}>
                <div className='cartcontent'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <span><h5> Price : <FontAwesomeIcon className="icon" icon={faRupeeSign} /><b> {data.price}</b></h5></span>
                </div>
                <div>
                    <img  src={data.image} alt="Cart"/>
                </div>
            <div className='trashicon'>
            <button onClick={()=>handleDelete(data.id)}><span>Remove</span><FontAwesomeIcon className='trashicon' icon={faTrashAlt} /></button>
            </div>
            </div>
            )}
        </div>
        }
        </>
    )
}
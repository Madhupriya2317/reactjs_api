import React, { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import Addtocart from "./addtocart";
import AddButton from "./addbutton";

export default function Productdetails(props){
    const {state} = useLocation();
    const[add,setAdd] = useState(JSON.parse(window.localStorage.getItem('add')));
    console.log(props.select)

function handleInc(e){
    e.preventDefault();
    setAdd(add+1)
}
useEffect(() => {
    window.localStorage.setItem('add', add);
  }, [add]);
 
 return(
        <div className="details">
            <div className="pagetitle">
                <h3><b>PRODUCT DETAILS</b></h3>
                <Addtocart count={add}/>
            </div>
            <div className="gridview">
                <div className="details2">
                    <img  src={state.productImage} alt="productimage"/>
                </div>
                <div className="details3">
                    <h3>{state.productTitle}</h3>
                    <h5><b>Category :</b> {state.productCategory}</h5>
                    <p><b> Description : </b>{state.productDescription}</p>
                    <h6> Price : <FontAwesomeIcon className="icon" icon={faRupeeSign} />{state.productPrice}</h6>
                    <p><b> Count : </b>{state.productCount}</p>
                    <p><b> Rating : </b>{state.productRate}<ReactStars  size={40}  isHalf={true} value={state.productRate} edit={false} activeColor="rgb(50, 179, 50)" color="rgb(149, 150, 149)"/></p>
                    <AddButton  handleInc={handleInc}/>
                </div>
            </div>
          
        </div>
    )
}
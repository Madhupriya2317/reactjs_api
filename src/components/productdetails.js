import React,{useState} from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign,faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import AddButton from "./addbutton";
import { useDispatch,useSelector } from 'react-redux';
import actions from "../redux/count/actions";
import cartactions from "../redux/cartid/actions"

export default function Productdetails(){
    const cartid = JSON.parse(window.localStorage.getItem("cartId")) || [];
    var[id,setId] = useState(cartid);
    const {state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector(
        (state) => state.counterReducer
    );

    function handleInc(Id){
        if(id.length === 0){
            setId(id = [Id])
            window.localStorage.setItem("cartId",JSON.stringify(id))
            dispatch({ type: cartactions.CART_ID,id : id})
        }else {
           var addId = JSON.parse(window.localStorage.getItem("cartId"))
            var finalId = [...addId,Id];
            window.localStorage.setItem("cartId",JSON.stringify(finalId));
            dispatch({ type: cartactions.CART_ID,id : finalId})
        }
        const add = count.count + 1;
        dispatch({ type: actions.INCREMENT_COUNTER,count : add})
    }

 function handleGoBack(){
    navigate('/product')
 }

 return(
        <div className="details">
            <div className="pagetitle">
                <button onClick={handleGoBack}><FontAwesomeIcon className="arrowicon" icon={faArrowAltCircleLeft} size={28} /></button>
                <h3><b>PRODUCT DETAILS</b></h3>
            </div>
            <div className="gridview">
                <div className="details2">
                    <img  src={state.productImage} alt="productimage"/>
                </div>
                <div className="details3">
                    <h3>{state.productTitle}</h3>
                    <h5><b>Category :</b> {state.productCategory}</h5>
                    <p><b> Description : </b> {state.productDescription}</p>
                    <h6> Price : <FontAwesomeIcon className="icon" icon={faRupeeSign} />{state.productPrice}</h6>
                    <p> <b> Count : </b> {state.productCount}</p>
                    <p> <b> Rating : </b> {state.productRate}</p> <span><ReactStars  size={40}  isHalf={true} value={state.productRate} edit={false} activeColor="rgb(50, 179, 50)" color="rgb(149, 150, 149)"/></span>
                    <AddButton  handleInc={()=>handleInc(state.productId)} />
                </div>
            </div>
          
        </div>
    )
}
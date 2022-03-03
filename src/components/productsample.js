import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate}from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign,faSearch} from '@fortawesome/free-solid-svg-icons';
import SidebarNav from "./sidebar";
import ReactPaginate from 'react-paginate';
import AddButton from "./addbutton";
import {Spinner} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import actions from "../redux/count/actions";
import cartactions from "../redux/cartid/actions";
import Navtabs from './navtabs';
import ReactStars from "react-rating-stars-component";


export default function Productsample(){
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector(
        (state) => state.counterReducer
    );

    const cartid = JSON.parse(window.localStorage.getItem("cartId")) || [] ;
    var[id,setId] = useState(cartid);

    var[productData,setProductData] = useState([]);
    var[finalData,setFinalData] = useState(productData);
    var[priceFilter,setPriceFilter] = useState(productData);

    const datalimit = 10;
    const[currentpage,setCurrentpage] = useState(1);

    const[show,setShow] = useState(false);

    var[selectM,setSelectM] = useState("u");
    var[selectJ,setSelectJ] = useState("u");
    var[selectE,setSelectE] = useState("u");
    var[selectW,setSelectW] = useState("u");

    var[notSelected,setNotSelected] = useState('');

    var[isselectM,setIsselectM] = useState(false);
    var[isselectE,setIsselectE] = useState(false);
    var[isselectJ,setIsselectJ] = useState(false);
    var[isselectW,setIsselectW] = useState(false);
    var[isselect1,setIsselect1] = useState(false);
    var[isselect2,setIsselect2] = useState(false);
    var[clicked,setClicked] = useState(false); 

    var[ratingValue,setRatingValue] = useState(0);
    const [starsKey, setStarsKey] = useState(Math.random());
   
useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProductData(res.data)
            setShow(true);
            setNotSelected("uuuu")
        }).catch(err=>{
            return err;
        })  
},[]);

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
    dispatch({ type: actions.INCREMENT_COUNTER,count : add});
    
}

function handleProduct(d){
     navigate('/productdetails',{state : {
        productId : d.id,
        productTitle : d.title,
        productPrice : d.price,
        productDescription : d.description,
        productCategory : d.category,
        productImage : d.image,
        productRate : d.rating.rate,
        productCount : d.rating.count
     }  
  })
}

function handleTabValue(e){
    let name = e;
    let sortedData = [...productData];
    
         if(name === "atoz"){
                    let sortProduct = sortedData.sort((a, b) => (a.title < b.title) ? 0 : 1);
                    setProductData(sortProduct);
        }else if(name === "ztoa"){
                    let sortProduct = sortedData.sort((a, b) => (a.title > b.title) ? -1 : 1);
                    setProductData(sortProduct);
            }else if (name === "older"){
                    let sortProduct = sortedData.reverse();
                    setProductData(sortProduct);
            }else if(name === "low"){
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(a.price) - parseFloat(b.price)))
                    setProductData(sortProduct);                   
            }else if(name === "high"){
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(b.price) - parseFloat(a.price)))
                    setProductData(sortProduct);     
        }
}

function handlePageChange(pageNumber){
    setCurrentpage(pageNumber+1);
}

function HandleSelectM(e){
    if(e.target.checked === true){
        setIsselectM(true);
        setClicked(false);
        setSelectM(e.target.value);
    }else{
        setSelectM("u");
        setIsselectM(false);
    }
 }

 function HandleSelectJ(e){
    if(e.target.checked === true){
        setIsselectJ(true);
        setClicked(false);
        setSelectJ(e.target.value);
    }else{
        setSelectJ("u");
        setIsselectJ(false);
    }
  }

  function HandleSelectE(e){
    if(e.target.checked === true){
        setIsselectE(true);
        setClicked(false);
        setSelectE(e.target.value);
    }else{
        setSelectE("u");
        setIsselectE(false);
    }
  }

  function HandleSelectW(e){
    if(e.target.checked === true){
        setIsselectW(true);
        setClicked(false);
        setSelectW(e.target.value);
    }else{
        setSelectW("u");
        setIsselectW(false);
    }
  }

  const handlePriceRange = (e) => {
    var value = e.target.value;
    if(value === "1-499"){
         setIsselect1(true);
         setIsselect2(false);
         setClicked(false);
        //  setFinalData([...productData].filter(val=>{
        //      for( let i=1; i<=499; i++){
        //          if(i === parseInt(val.price)){
        //              return true;   
        //          }
        //          return false;
        //      }
        //   }))
             
    }else if(value === "500-999"){
            setIsselect2(true);
            setIsselect1(false);
            setClicked(false); 
        //     setFinalData([...productData].filter(val=>{
        //      for( let i=499; i<=999; i++){
        //          if(i === parseInt(val.price)){
        //              return true;   
        //          }
        //          return false;
        //      }
        //   }))
          
    }    
}

  useEffect(()=>{
    setFinalData([...productData].filter(val=>{
        switch(val.category){
            case selectM:case selectJ:case selectE:case selectW:
                 return true;
            default:
                return false;
        }    
    }))
  },[selectE,selectJ,selectM,selectW,productData,setFinalData])
    
useEffect(()=>{
      setNotSelected(selectM + selectJ + selectE + selectW)
},[selectM,selectJ,selectE,selectW,notSelected]);

function HandleUncheck(){
        setClicked(true);
        setSelectM("u");
        setSelectJ("u");
        setSelectE("u");
        setSelectW("u");
        setIsselectM(false);
        setIsselectJ(false);
        setIsselectE(false);
        setIsselectW(false);
        setIsselect1(false);
        setIsselect2(false);
        setFinalData(productData);
        setStarsKey(Math.random());
}

function handleRatingChange(newRating){
        setRatingValue(ratingValue = [newRating]); 

        var ratingFilter = [...productData].filter(item=>{
            for(var key in ratingValue){
                if(item[key] === undefined || item[key] !== ratingValue[key]){
                    return false;
                }
                console.log(item)
            }
        })
      console.log(ratingFilter)  
}

return(
        <div>
            {(!show) ?
            <div className="loading">
                <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div> :
            <div>
                
            <div className="pagetitle1">
                <h2><b>PRODUCT LIST</b></h2>
            </div>
            <Navtabs handleTabValue={handleTabValue} />
            {notSelected === "uuuu" ||clicked === true ?
             <div className="product">
             {productData.slice((currentpage-1)*datalimit,currentpage*datalimit).map((d)=> 
                 <div className="section1" key={d.id}>
                     <img src={d.image} alt="product" className="productimage" /> 
                     <h5 className="ps-4">Category : {d.category}</h5>
                     <h5 className="title">{d.title}</h5> 
                         <h5><FontAwesomeIcon className="icon" icon={faRupeeSign} /><b> {d.price}</b></h5>
                         <button onClick={()=>handleProduct(d)}>View Product Details</button>
                             <AddButton handleInc={()=>handleInc(d.id)} />                 
                 </div>
             )}
             
         </div> 
          :
            <div className="product">
            {finalData
            .filter(val => {
                 if(isselect1 === true){
                    for( let i=1; i<=499; i++){
                        if(i === parseInt(val.price)){
                            return val;   
                        }
                    }
                }else if(isselect2 === true){
                    for( let i=500; i<=999; i++){
                        if(i === parseInt(val.price)){
                            return val;   
                        }
                    }         
                }
            })
            .map((d)=> 
                <div className="section1" key={d.id}>
                    <img src={d.image} alt="product" className="productimage" /> 
                    <h5 className="ps-4">Category : {d.category}</h5>
                    <h5 className="title">{d.title}</h5> 
                    <span className="price_rating"><h5><FontAwesomeIcon className="icon" icon={faRupeeSign} /><b> {d.price}</b></h5>
                        <ReactStars  size={25}  isHalf={true} value={d.rating.rate} edit={false} activeColor="rgb(50, 179, 50)" color="rgb(149, 150, 149)"/></span>
                        <button onClick={()=>handleProduct(d)}>View Product Details</button>
                            <AddButton handleInc={()=>handleInc(d.id)} />                 
                </div>
                )}
            </div>
            
           
            } 
            
            < ReactPaginate
          previousLabel={""}
          nextLabel={ "" }
          pageCount = {(isselectM === true || isselectJ === true ||
                        isselectE === true || isselectW === true ||
                        isselect2 === true ) ? Math.ceil(null) : Math.ceil(productData.length/datalimit)}
          onPageChange={(e)=>handlePageChange(e.selected) } 
          containerClassName={ "pagination justify-content-center mt-3" }
          pageClassName={ "page-item" }
          pageLinkClassName={"page-link"}
          activeClassName={ "active" } 
/>

<SidebarNav HandleSelectM={HandleSelectM} HandleSelectJ={HandleSelectJ} HandleSelectE={HandleSelectE} 
                        HandleSelectW={HandleSelectW} HandleUncheck={HandleUncheck} 
                        handleRatingChange={handleRatingChange} handlePriceRange={handlePriceRange}
                        isselectM={isselectM} isselectJ={isselectJ} isselectE={isselectE} starsKey={starsKey}
                        isselectW={isselectW} isselect1={isselect1} isselect2={isselect2}          
            /> 
           
             
            </div> }
        </div>
       
    )
}



 
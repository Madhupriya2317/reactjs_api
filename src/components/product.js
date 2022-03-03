import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate}from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import SidebarNav from "./sidebar";
import ReactPaginate from 'react-paginate';
import AddButton from "./addbutton";
import {Spinner} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import actions from "../redux/count/actions";
import cartactions from "../redux/cartid/actions";
import Navtabs from "./navtabs";

export default function Product(){

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector(
        (state) => state.counterReducer
    );
    // const Id = useSelector(
    //     (state) => state.cartReducer
    // );  
    const cartid = JSON.parse(window.localStorage.getItem("cartId")) || [];
    var[id,setId] = useState(cartid);
    var[productData,setProductData] = useState([]);
    var[finalData,setFinalData] = useState([]);
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
    var[isselectA,setIsselectA] = useState(false);
    var[isselectZ,setIsselectZ] = useState(false);
    var[isselectN,setIsselectN] = useState(false);
    var[isselectO,setIsselectO] = useState(false);
    var[isselectL,setIsselectL] = useState(false);
    var[isselectH,setIsselectH] = useState(false);
    var[clicked,setClicked] = useState(false); 
    var[startValue,setStartValue] = useState(0);
    var[endValue,setEndValue] = useState(0);
    var[priceFilter,setPriceFilter] = useState('');
    var[changeFilter,setChangeFilter] = useState(false);

useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProductData(res.data)
            setShow(true);
        }).catch(err=>{
            return err;
        })  
},[]);

useEffect(() => {
    setFinalData([...productData].filter(val => {
            for (var j = startValue; j <= endValue; j++) {
                if (j === parseInt(val.price)) {
                  return val;
                }
        }
      
    })) 
}, [productData,setFinalData,startValue,endValue])

function handleInc(Id){
    setId(id = [...id,Id])
    window.localStorage.setItem("cartId",JSON.stringify(id))
    dispatch({ type: cartactions.CART_ID,id : id})
    const add = count.count + 1;
    dispatch({ type: actions.INCREMENT_COUNTER,count : add})
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

function handlePageChange(pageNumber){
    setCurrentpage(pageNumber+1);
}

function handlePriceRange(e){
    if(e.target.checked === true){
        setClicked(false);
        setPriceFilter(priceFilter = e.target.value);
        setChangeFilter(true);
    }
    
    if(e.target.value === "1-499"){
         setStartValue( startValue = e.target.value.slice(0,1));
         setEndValue( endValue = e.target.value.slice(2,6));
    }else if(e.target.value === "500-999"){ 
            setStartValue( startValue = e.target.value.slice(0,3));
            setEndValue( endValue = e.target.value.slice(4,7));
    }   
}

function handleTabValue(e){
    let name = e;
    let sortedData = [...productData];
    setChangeFilter(true);
         if(name === "atoz"){
                    let sortProduct = sortedData.sort((a, b) => (a.title < b.title) ? 0 : 1);
                    setFinalData(sortProduct);
        }else if(name === "ztoa"){
                    let sortProduct = sortedData.sort((a, b) => (a.title > b.title) ? -1 : 1);
                    setFinalData(sortProduct);
            }else if (name === "older"){
                    let sortProduct = sortedData.reverse();
                    setFinalData(sortProduct);
            }else if(name === "low"){
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(a.price) - parseFloat(b.price)))
                    setFinalData(sortProduct);                   
            }else if(name === "high"){
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(b.price) - parseFloat(a.price)))
                    setFinalData(sortProduct);     
        }
}

function HandleSelectM(e){
   
    if(e.target.checked === true){
        setIsselectM(true);
        setClicked(false);
        setSelectM(e.target.value);
        setChangeFilter(false);
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
        setChangeFilter(false);
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
        setChangeFilter(false);
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
        setChangeFilter(false);
    }else{
        setSelectW("u");
        setIsselectW(false);
    }
  }



useEffect(()=>{
      setNotSelected(selectM + selectJ + selectE + selectW)
},[selectM,selectJ,selectE,selectW,notSelected]);

function HandleUncheck(){
        setClicked(true);
        setChangeFilter(false);
        setPriceFilter('');
        setSelectM("u");
        setSelectJ("u");
        setSelectE("u");
        setSelectW("u");
        setIsselectM(false);
        setIsselectJ(false);
        setIsselectE(false);
        setIsselectW(false);
        setIsselectA(false);
        setIsselectZ(false);
        setIsselectO(false);
        setIsselectN(false);
        setIsselectL(false);
        setIsselectH(false);
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
            <div className="pagetitle">
                <h2><b>PRODUCT LIST</b></h2>
            </div>
            <Navtabs handleTabValue={handleTabValue}/>
            {changeFilter===false  ?
             <div className="product">
            {productData.filter(val=>{
                if(clicked === true || notSelected === "uuuu"){
                    return val;
                }else if(val.category.toLowerCase().includes(selectM.toLowerCase())||
                        val.category.toLowerCase().includes(selectE.toLowerCase())||
                        val.category.toLowerCase().includes(selectJ.toLowerCase())||
                        val.category.toLowerCase().includes(selectW.toLowerCase())){
                            return val;
                }else return null;
             }).slice((currentpage-1)*datalimit,currentpage*datalimit).map((d)=> 
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
             {finalData.map((d)=> 
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
            }  
            
            <SidebarNav HandleSelectM={HandleSelectM}  HandleSelectJ={HandleSelectJ} HandleSelectE={HandleSelectE} 
                        HandleSelectW={HandleSelectW} HandleUncheck={HandleUncheck} handlePriceRange={handlePriceRange}
                        isselectM={isselectM} isselectJ={isselectJ} isselectE={isselectE}
                        isselectW={isselectW} priceFilter={priceFilter}        
            />
            
            < ReactPaginate
                                    previousLabel={""}
                                    nextLabel={ "" }
                                    pageCount = {Math.ceil(productData.length/datalimit)}
                                    onPageChange={(e)=>handlePageChange(e.selected) } 
                                    containerClassName={ "pagination justify-content-center mt-3" }
                                    pageClassName={ "page-item" }
                                    pageLinkClassName={"page-link"}
                                    activeClassName={ "active" } 
                      />
             
            </div> }
        </div>
       
    )
}
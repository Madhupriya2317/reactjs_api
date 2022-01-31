import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import {useNavigate}from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import SidebarNav from "./sidebar";
import ReactPaginate from 'react-paginate';
import AddButton from "./addbutton";
import {Spinner} from 'react-bootstrap'
import { CounterContext } from "../context/counterContext";

export default function Product(){
    let navigate = useNavigate();
    const {handleInc} = useContext(CounterContext);
    var[productData,setProductData] = useState([]);
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
    var[isselect1,setIsselect1] = useState(false);
    var[isselect2,setIsselect2] = useState(false);
    var[clicked,setClicked] = useState(false);
    var[price,setPrice] = useState("");
   

useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProductData(res.data)
            setShow(true);
        })  
},[])

function handleProduct(d){
     navigate('/productdetails',{state : {
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

function handleChecked(e){
    var name = e.target.value;
    var checked = e.target.checked; 
    let sortedData = [...productData];
    
        if(name === "newer"){
                if(checked === true){
                    setClicked(true)
                    setIsselectN(true);
                    setIsselectO(false);
                }else return null;
            }else if(name === "atoz"){
                if(checked === true){
                    setClicked(false)
                    setIsselectA(true);
                    setIsselectZ(false);
                    console.log("Ascending Order");
                    let sortProduct = sortedData.sort((a, b) => (a.title < b.title) ? 0 : 1);
                    setProductData(sortProduct);
                }else return setProductData(sortedData)
            }else if(name === "ztoa"){
                if(checked === true){
                    setIsselectZ(true);
                    setIsselectA(false);
                    setClicked(false)
                    console.log("Descending Order");
                    let sortProduct = sortedData.sort((a, b) => (a.title > b.title) ? -1 : 1);
                    setProductData(sortProduct);
                }else return setProductData(sortedData);
            }else if (name === "older"){
                if(checked === true){
                    setIsselectO(true);
                    setIsselectN(false);
                    setClicked(false)
                    console.log("Older to Newer")
                    let sortProduct = sortedData.reverse();
                    setProductData(sortProduct);
                }else return setProductData(productData);
            }else if(name === "low"){
                if(checked === true){
                    setIsselectL(true);
                    setIsselectH(false);
                    setClicked(false)
                    console.log("Low to High");
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(a.price) - parseFloat(b.price)))
                    setProductData(sortProduct);                   
                }else return setProductData(productData);
            }else if(name === "high"){
                if(checked === true){
                    setIsselectH(true);
                    setIsselectL(false);
                    setClicked(false)
                    console.log("High to Low");
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(b.price) - parseFloat(a.price)))
                    setProductData(sortProduct);                   
                }else return setProductData(productData);
        }
}

function HandleSelectM(e){
    if(e.target.checked === true){
        setIsselectM(true);
        setClicked(false)
        setSelectM(e.target.value);
    }else{
        setSelectM("u")
    }
 }

 function HandleSelectJ(e){
    if(e.target.checked === true){
        setIsselectJ(true)
        setClicked(false)
        setSelectJ(e.target.value);
    }else{
        setSelectJ("u")
    }
  }

  function HandleSelectE(e){
    if(e.target.checked === true){
        setIsselectE(true)
        setClicked(false)
        setSelectE(e.target.value);
    }else{
        setSelectE("u")
    }
  }

  function HandleSelectW(e){
    if(e.target.checked === true){
        setClicked(false)
        setIsselectW(true)
        setSelectW(e.target.value);
    }else{
        setSelectW("u")
    }
  }
    
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
        setIsselectA(false);
        setIsselectZ(false);
        setIsselectO(false);
        setIsselectN(false);
        setIsselectL(false);
        setIsselectH(false);
        setIsselect1(false);
        setIsselect2(false);
}

const handlePriceRange = (e) => {
       var value = e.target.value;
       var checked = e.target.checked;
    //    let sortedData = [...productData];
       
    //    var sliced1,sliced2;
       if(value === "1-499"){
        if(checked === true){
            setIsselect1(true);
            setIsselect2(false);
            setClicked(true);
        }
       }else if(value === "500-999"){
           if(checked === true){
               setIsselect2(true);
               setIsselect1(false);
               setClicked(true);
           }
       }
       setPrice(value);
       
    //    let sortProduct = sortedData.filter(val => {
    //        for( let i=sliced1; i<=sliced2; i++){
    //            if(i === parseInt(val.price)){
    //                console.log(val.price)
    //             //    return val;   
    //            }
    //        }
    //    })
    //    setProductData(sortProduct)
     
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
            <div className="product">
            {productData.filter(val => {
                if(price === "1-499"){
                    for( let i=1; i<=499; i++){
                        if(i === parseInt(val.price)){
                            return val;   
                        }
                    }
                }else if(price === "500-999"){
                    for( let i=500; i<=999; i++){
                        if(i === parseInt(val.price)){
                            return val;   
                        }
                    }
                }else if(notSelected === "uuuu" || clicked === true){
                    return val;
                }else if(val.category.toLowerCase().includes(selectM.toLowerCase())||
                         val.category.toLowerCase().includes(selectE.toLowerCase())||
                         val.category.toLowerCase().includes(selectJ.toLowerCase())||
                         val.category.toLowerCase().includes(selectW.toLowerCase())){
                         return val;
                }
               
            }).slice((currentpage-1)*datalimit,currentpage*datalimit).map((d)=> 
                <div className="section1" key={d.id}>
                    <img src={d.image} alt="product" className="productimage" /> 
                    <h5 className="ps-4">Category : {d.category}</h5>
                    <h5 className="title">{d.title}</h5> 
                        <h5><FontAwesomeIcon className="icon" icon={faRupeeSign} /><b> {d.price}</b></h5>
                        <button onClick={()=>handleProduct(d)}>View Product Details</button>
                        <AddButton handleInc={handleInc}/>
                </div>
                )}
            </div>
            <SidebarNav handleChecked={handleChecked} HandleSelectM={HandleSelectM} 
                        HandleSelectJ={HandleSelectJ} HandleSelectE={HandleSelectE} 
                        HandleSelectW={HandleSelectW} HandleUncheck={HandleUncheck}
                        isselectM={isselectM} isselectJ={isselectJ} isselectE={isselectE}
                        isselectW={isselectW} isselectA={isselectA} isselectN={isselectN}
                        isselectL={isselectL} isselectZ={isselectZ} isselectO={isselectO}
                        isselectH={isselectH} isselect1={isselect1} isselect2={isselect2} 
                        handlePriceRange={handlePriceRange}
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



 
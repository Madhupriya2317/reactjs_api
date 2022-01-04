import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate}from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import SidebarNav from "./sidebar";
import ReactPaginate from 'react-paginate';
import Addtocart from "./addtocart";
import AddButton from "./addbutton";

export default function Product(){
    let navigate = useNavigate();
    
    const[productData,setProductData] = useState([]);
    const datalimit = 10;
    const[currentpage,setCurrentpage] = useState(1);
    const[select,setSelect] = useState('all');
    const[show,setShow] = useState(false);
    const[add,setAdd] = useState(JSON.parse(window.localStorage.getItem('add')));

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

                    setProductData(sortedData);

                }else return null;
            }else if(name === "atoz"){
                if(checked === true){

                    console.log("Ascending Order");
                    let sortProduct = sortedData.sort((a, b) => (a.title < b.title) ? 0 : 1);
                    setProductData(sortProduct);

                }else return setProductData(sortedData)
            }else if(name === "ztoa"){
                if(checked === true){

                    console.log("Descending Order");
                    let sortProduct = sortedData.sort((a, b) => (a.title > b.title) ? -1 : 1);
                    setProductData(sortProduct);

                }else return setProductData(sortedData);
            }else if (name === "older"){
                if(checked === true){

                    console.log("Older to Newer")
                    let sortProduct = sortedData.reverse();
                    setProductData(sortProduct);

                }else return setProductData(productData);
            }else if(name === "low"){
                if(checked === true){

                    console.log("Low to High");
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(a.price) - parseFloat(b.price)))
                    setProductData(sortProduct);
                   
                }else return setProductData(productData);
            }else if(name === "high"){
                if(checked === true){

                    console.log("High to Low");
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(b.price) - parseFloat(a.price)))
                    setProductData(sortProduct);
                    
                }else return setProductData(productData);
        }
}

function handleSelect(e){

    setSelect(e.target.value); 
}

function handleInc(e){
    e.preventDefault();
    setAdd(add+1)
}

useEffect(() => {
    window.localStorage.setItem('add', add);
  }, [add]);

return(
        <div>
            {(!show) ?
            <h1 className="loading">Loading...</h1> :
            <div>
            <div className="pagetitle">
                <h2><b>PRODUCT LIST</b></h2>
                <Addtocart count={add}/>
            </div>
            <div className="product">
            {productData.filter(val=>{
                if(select === "all"){
                    return val;
                }else if( val.category.toLowerCase().includes(select.toLowerCase())){
                    return val;
                    
                }else return null;
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
            <SidebarNav handleChecked={handleChecked} handleSelect={handleSelect}/>
            {select === "all"?
            < ReactPaginate
                                    previousLabel={""}
                                    nextLabel={ "" }
                                    pageCount = { productData.length/datalimit }
                                    onPageChange={(e)=>handlePageChange(e.selected) } 
                                    containerClassName={ "pagination justify-content-center mt-3" }
                                    pageClassName={ "page-item" }
                                    pageLinkClassName={"page-link"}
                                    activeClassName={ "active" } 
                      />  : null}
            </div> }
        </div>
       
    )
}



 
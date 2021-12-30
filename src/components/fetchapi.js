import React,{useState,useEffect} from "react";
import { Tab, Tabs } from 'react-bootstrap';
//import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import axios from "axios";
import ReactPaginate from 'react-paginate';


export default function Fetchapi() {
  //  let navigate = useNavigate();

    var[item,setItem] = useState([]);
    var[id,setID] = useState('');
    var[firstname,setFirstname] = useState('');
    var[lastname,setLastname] = useState('');
    var[email,setEmail] = useState('');
    var[avatar,setAvatar] = useState('');
    var[show,setShow] = useState(false);
    var[isLoading,setIsLoading] = useState(false);
    var[key,setKey] = useState('users');
    var[total,setTotal]= useState('')
    var limit = 6
     
useEffect(() =>{
      axios.get(`https://reqres.in/api/users`)
           .then((res)=>{
               setItem(res.data.data)
               setTotal(res.data.total)
               setIsLoading(true)
            })
},[limit]);

function handlePageChange(pageNumber){
     var page = pageNumber.selected + 1;

    axios.get(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>{
        setItem(res.data.data)
    })
}


 const handleProfile = (items)=>{
         setKey("profile")
        setID(items.id);
        setFirstname(items.first_name);
        setLastname(items.last_name);
        setEmail(items.email);
        setAvatar(items.avatar);
        setShow(true);
  }

  return (
            <div className="container">
                {(!isLoading) ?
                  <h1 className="loading">Loading...</h1>:
                <div>
                <Tabs className="tabs" defaultActiveKey="users" activeKey={key} onSelect={(e)=>setKey(e)} >
                        <Tab eventKey="users" title="Users">
                            <div className="row ps-4 d-flex bg-dark text-white border-white">
                                <div className="col ms-3"><b>ID</b></div>
                                <div className="col me-5"><b>FIRST NAME</b></div>
                                <div className="col me-5"><b>LAST NAME</b></div>
                                <div className="col me-5"><b>EMAIL ID</b></div>
                                <div className="col"><b>AVATAR</b></div>
                            </div>

                        {item.map((items)=>
                            <button key={items.id} className="row ps-5 d-flex bg-light" onClick={()=>handleProfile(items)} >
                                    <div className="col mt-4"> {items.id}</div>
                                    <div className="col mt-4"> {items.first_name}</div>
                                    <div className="col mt-4"> {items.last_name}</div>
                                    <div className="col mt-4"> {items.email}</div>
                                    <div className="col"><img src={items.avatar} className="rounded-circle w-50 h-65 ms-4" alt="avatar"/></div>                  
                            </button> )}
                            < ReactPaginate
                                    previousLabel={""}
                                    nextLabel={ "" }
                                    pageCount={total/limit}
                                    onPageChange={ handlePageChange } 
                                    containerClassName={ "pagination justify-content-center mt-3" }
                                    pageClassName={ "page-item" }
                                    pageLinkClassName={"page-link"}
                                    activeClassName={ "active" } 
                      />  
                            
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            {show ?
                                <Profile id={id} firstname={firstname} lastname={lastname} email={email} avatar={avatar}/> : <h5>No user selected</h5>
                            }
                        </Tab>
                </Tabs>     
                </div>}
            </div>
     );
 }





import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function Profile({id,firstname,lastname,email,avatar}){
    var[phoneno,setPhoneno] = useState('');
    var[address,setAddress] = useState('');
    var[show,setShow] = useState(false);
    var[show2,setShow2] = useState(false)
   //let navigate = useNavigate();
   
    function handleUpdate(e){
        e.preventDefault();
        setShow(true);
    }

    function handleSave(e){
        e.preventDefault();
        setShow2(true);
    }

    function handleChange(e){
        e.preventDefault();
    }
    return(
        <div className="profile">
            
           <form>
               <div className="formdata">
               <label>User Id : </label>
               <input name="id" type="text" value={id} onChange={handleChange}/><br />
               <label>First Name : </label>
               <input name="id" type="text" value={firstname} onChange={handleChange}/><br />
               <label>Last Name : </label>
               <input name="id" type="text" value={lastname} onChange={handleChange}/><br />
               <label>Email ID : </label>
               <input name="id" type="text" value={email} onChange={handleChange}/><br />
               <label>Phone Number : </label>
               <input name="id" type="number" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)}/><br />
               <label>Address : </label>
               <input name="id" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/><br />
               </div>
               <div className="avatar">
               <h4>Profile Picture</h4>
               <img src={avatar} alt="avatar" />
               </div>
               <button onClick={handleUpdate}>Update</button>
           </form>
           <div>
                {show ? 
                        <div className="updateddata">
                            <h3>Check for update</h3><br />
                            <p>First Name : {firstname}</p>
                            <p>Last Name : {lastname}</p>
                            <p>Email ID : {email}</p>
                            <p>Phone Number : {phoneno}</p>
                            <p>Address : {address}</p>
                            <button onClick={handleSave}>Save</button>
                        </div>
                : null}
           </div>
           <div className="updatestatus">
               {show2 ?
                        <h4 className="text-success pt-5">Your Details Updated Successfully...</h4> 
                    : null 
                }
              
           </div>
        </div>
    )
}

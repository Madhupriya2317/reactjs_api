import React from "react";
import image from '../images/mindmade.jpg';
import whatsapp from '../images/whatsapp.jpg';

export default function Mindmade() {

    return(
        <div className="mmmain">
           <img src={image} className="App-logo" alt="logo" /> 
           <div className="menubar">
             <nav className="navbar navbar-expand">
               <div className="container-fluid">
                 <ul className="navbar-nav">
                    <li className="nav-items">
                        <a className="nav-link" href="#home"><b>Home</b></a>
                    </li>
                    <li className="nav-items ps-3">
                        <a className="nav-link" href="#aboutus"><b>About Us</b></a>
                    </li>
                    <li className="nav-items dropdown ps-3">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#services"><b>Services</b></a> 
                          <ul className="dropdown-menu ">
                              <li className="dropdown-item">
                                <a href="#websitedesign">Website Design</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#ecommerce">E-Commerce</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#branding&logodesign">Branding & Logo Design</a>
                              </li>
                              <li className="dropdown-item"> 
                                <a href="#searchengineoptimisation">Search Engine Optimisation</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#digitalmarketing">Degital Marketing</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#mobileappdevelopment">Mobile App Development</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#softwaredevelopment">Software Development</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#itoffshoreoutsourcing">IT Offshore Outsourcing</a>
                              </li>
                         </ul>
                      </li>
                      <li className="nav-items ps-3">
                          <a className="nav-link" href="#portfolio"><b>Portfolio</b></a>
                      </li>
                      <li className="nav-items ps-3">
                         <a className="nav-link" href="#careers"><b>Careers</b></a>
                      </li>
                      <li className="nav-items ps-3">
                          <a className="nav-link" href="#blog"><b>Blog</b></a>
                      </li>
                      <li className="nav-items ps-3">
                          <a className="nav-link" href="#contactus"><b>Contact Us</b></a>
                      </li>
                  </ul>
                </div>
              </nav>
            </div>        
            <div className="content">
                <h1><b>Design is a marathon towards<br></br> perfection without a finishline</b></h1>
                    <button><b>Get In Touch</b></button>
            </div>
            <div className="call-to-action">
              <div className="box" />
                  <ul>
                      <li className="icon1"><a href="#phonenumber">
                          <i className="fa fa-phone" aria-hidden="true"></i> 91-9566566699</a>
                      </li>
                      <li className="icon2"><a href="#mailid">
                          <i className="fa fa-envelope"></i> info@mindmade.in</a>
                      </li>
                  </ul>
              </div>
             <div className="logo">
                  <img src={whatsapp}  className="whatsapp-logo" alt="whatsapp" />
             </div>
      </div>

    )
}
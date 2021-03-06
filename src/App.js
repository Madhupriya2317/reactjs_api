import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../src/styles/mindmade.css';
import '../src/styles/App.css';
import '../src/styles/buttoncount.css';
import '../src/styles/fetchapi.css';
import '../src/styles/profile.css';
import '../src/styles/product.css';
import '../src/styles/productdetails.css';
import '../src/styles/sidebar.css';
import '../src/styles/addtocart.css';
import '../src/styles/list.css';
import logo from './images/react.jpg';
import { Link } from 'react-router-dom';
import Addtocart from './components/addtocart';
import { Drawer,Button } from '@material-ui/core';
import Cartitem from './components/cartitem';

function App() {
  
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  return (
    
         <div className="header fixed-top">
      <div>
       <img src={logo} className="app-logo" alt="logo"/>
          <div className="menubar ">
              <nav className="navbar navbar-expand">
                  <div className="container-fluid">
                     <ul className="navbar-nav ">
                        <li className="nav-items ">
                           <Link className="nav-link text-white text-decoration-none" href="#home" to="/">Home </Link>
                         </li>
                          <li className="nav-items dropdown ps-3">
                             <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#Pages">Pages</a> 
                              <ul className="dropdown-menu bg-dark ">
                                  <li className="dropdown-item">
                                   <Link className="dropdown-link text-white" href="#Mindmade" to="/mindmade">Mindmade</Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link className="text-white" href="#Button Count" to="/buttoncount">Button Count</Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link className="text-white" href="#API Data" to="/fetchapi">API Data</Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link className="text-white" href="#Product" to="/product">Product Cart</Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link className="text-white" href="#Product" to="/list">Array List</Link>
                                  </li>
                               </ul>
                            </li>
                            <Button onClick={toggleDrawer("right", true)}>
                                <Addtocart />
                            </Button>
                            <Drawer
                                anchor={"right"}
                                open={state["right"]}
                                onClose={toggleDrawer("right", false)}
                            >
                               <Cartitem />
                            </Drawer>
                                
                            
                         </ul>
                     </div>
                 </nav>
             </div>
            </div>
        </div>
  
    );
  }

export default App;

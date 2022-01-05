import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import Slider from './components/slider';
import Mindmade from './components/mindmade';
import ButtonCount from './components/buttoncount';
import Fetchapi from './components/fetchapi';
import Profile from './components/profile';
import Product from './components/product';
import Productdetails from './components/productdetails';
import Notfound from './components/Notfound';
import Addtocart from './components/addtocart';
import ListArray from './components/list';
import CounterContextProvider from './context/counterContext';
//const Product = lazy(() => import('./components/product'));

const routing = (
    <CounterContextProvider>
                  <Router>
                      
                      <div>
                          <App /> 
                          <Routes>
                              <Route path="/" element = {<Slider />} />
                              <Route path="/mindmade" element={< Mindmade />} />
                              <Route path="/buttoncount" element={< ButtonCount />} />
                              <Route path="/fetchapi" element={< Fetchapi />} />  
                              <Route path="/profile" element={<Profile />}  /> 
                              <Route path="/product" element={<Product />}  /> 
                              <Route path="/productdetails" element={<Productdetails />}  />
                              <Route path="/addtocart" element={<Addtocart />}  />
                              <Route path="/list" element={<ListArray />} />
                              <Route path="*" element={<Notfound />}  />  
                          </Routes>
                      </div>
                      
                </Router>
    </CounterContextProvider>
    );
    ReactDOM.render(routing, document.getElementById('root'));




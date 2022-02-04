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
import Sample from './components/sample';
import Cartitem from './components/cartitem';
import { Provider } from 'react-redux';
import store from './redux/store';
//const Product = lazy(() => import('./components/product'));

const routing = (
    <Provider store={store}>
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
                              <Route path="sample" element={<Sample />}  />    
                              <Route path="cartitem" element={<Cartitem />}  />    
                          </Routes>
                      </div>
            </Router>
    </Provider>
    );
    ReactDOM.render(routing, document.getElementById('root'));

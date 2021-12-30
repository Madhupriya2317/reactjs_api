import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import nature1 from '../images/nature1.jpg';
import nature2 from '../images/nature2.jpg';
import nature3 from '../images/nature3.jpg';

 
export default function Slider(){
    return(
        <div className="slider">
            <Carousel interval={1000} indicators={false} controls={false}>
                <Carousel.Item>
                    <img src={nature1} height={576} width={1360} alt="nature1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={nature2} height={576} width={1360} alt="nature2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={nature3} height={576} width={1360} alt="nature3" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

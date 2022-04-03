import React, { useState } from 'react'
import "./Swiper.css";
import "./popup.css"
import "./Header.css";
import Slider1 from "../images/header-slide-1.jpg";
import Slider2 from "../images/header-slide-2.jpg";
import Slider3 from "../images/header-slide-3.jpg";
import Partner1 from "../images/partner-logo-1.png";

import Partner2 from "../images/partner-logo-2.png";

import Partner3 from "../images/partner-logo-3.png";

import Partner4 from "../images/partner-logo-4.png";
import Partner5 from "../images/partner-logo-5.png";
//import Header from './Header';


import { Carousel } from 'react-bootstrap';

const Firstpage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  


  return (
    <><header id="header" class="header">

          <div class="container">
              <div class="row">
                  <div class="col-lg-12">


                      <div class="slider-container">
                          <div class="swiper-container text-slider">
                              <Carousel class="swiper-wrapper" fade >
                              <Carousel.Item class="swiper-slide">
                                      <div class="row">
                                          <div class="col-lg-6 col-xl-7">
                                              <div class="image-container">
                                                  <img class="img-fluid" src={Slider1} alt="alternative" />
                                              </div>                                    </div>                                     <div class="col-lg-6 col-xl-5">
                                              <div class="text-container">
                                                  <h1 class="h1-large">Imperdiet sed euismod nisi</h1>
                                                  <p class="p-large">Imperdiet sed euismod nisi porta lorem mollis aliq uam et molestie ac feugiat sed lectus es trudi</p>
                                                  <a class="btn-solid-lg page-scroll" href="/#">FREE TRIAL</a>
                                                  
                                  
                                                 
                                                 
                                                  <a class="btn-outline-lg page-scroll" href="/#">DISCOVER</a>
                                              </div>
                                          </div>
                                      </div>
                           


                                  </Carousel.Item>
                               

                                  <Carousel.Item class="swiper-slide">
                                      <div class="row">
                                          <div class="col-lg-6 col-xl-7">
                                              <div class="image-container">
                                                  <img class="img-fluid" src={Slider2} alt="alternative" />
                                              </div>                                    </div>                                     <div class="col-lg-6 col-xl-5">
                                              <div class="text-container">
                                                  <h1 class="h1-large">Imperdiet sed euismod nisi</h1>
                                                  <p class="p-large">Imperdiet sed euismod nisi porta lorem mollis aliq uam et molestie ac feugiat sed lectus es trudi</p>
                                                  <a class="btn-solid-lg page-scroll" href="#registration"  onClick={handleShow}>FREE TRIAL</a>
                                                  <a class="btn-outline-lg page-scroll" href="#features"  onClick={handleShow}>DISCOVER</a>
                                              </div>
                                          </div>
                                      </div>
                                  </Carousel.Item>
                                  <Carousel.Item class="swiper-slide">
                                      <div class="row">
                                          <div class="col-lg-6 col-xl-7">
                                              <div class="image-container">
                                                  <img class="img-fluid" src={Slider3} alt="alternative" />
                                              </div>
                                          </div>                                     <div class="col-lg-6 col-xl-5">
                                              <div class="text-container">
                                                  <h1 class="h1-large">Egestas quis ipsum suspse</h1>
                                                  <p class="p-large">Egestas quis ipsum suspendisse ultrices gravida vel facilisis volutpat est velit egestas dui id viron mer</p>
                                                  <a class="btn-solid-lg page-scroll" href="#registration">FREE TRIAL</a>
                                                  <a class="btn-outline-lg page-scroll" href="#features">DISCOVER</a>
                                              </div>
                                          </div>
                                      </div> 
                                                                  </Carousel.Item>
                              </Carousel>

                          </div>
                      </div>

                  </div>   
                       </div>
              <div class="row">
                  <div class="col-lg-12">
                      <div class="partner-container">
                          <p class="p-small">Dignim convs</p>
                          <img class="img-fluid" src={Partner1} alt="alternative" />
                          <img class="img-fluid" src={Partner2} alt="alternative" />
                          <img class="img-fluid" src={Partner3} alt="alternative" />
                          <img class="img-fluid" src={Partner4} alt="alternative" />
                          <img class="img-fluid" src={Partner5} alt="alternative" />
                      </div>
                  </div>
              </div>
          </div>
      </header></> 


  )
}

export default Firstpage;


window.onload = function(){
    const toggleButton = document.getElementsByClassName("toggle-button")[0]
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    
    
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active")
    })
    
    }
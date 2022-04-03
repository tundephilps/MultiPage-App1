
import React from 'react'
import video from "../images/video-preview.jpg";
import test1 from "../images/testimonial-1.jpg";

import test2 from "../images/testimonial-2.jpg";
import test3 from "../images/testimonial-3.jpg";
//import test4 from "../images/testimonial-4.jpg";
//import test5 from "../images/testimonial-5.jpg";
//import test6 from "../images/testimonial-6.jpg";


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Fifthpage = () => {


    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <div class="card">
                                              <img class="card-image" src={test2} alt="alternative" />
                                              <div class="card-body">
                                                  <p class="testimonial-text">Praesent elementum facilisis leo vel rutrum quisque non tellus orci ac auctor augue mauris viverra accumsan intro</p>
                                                  <p class="testimonial-author">Lorem Ipsum - Designer</p>
                                              </div>
                                          </div>
                                      ,
                                      <div class="card">
                                      <img class="card-image" src={test1} alt="alternative" />
                                      <div class="card-body">
                                          <p class="testimonial-text">Praesent elementum facilisis leo vel rutrum quisque non tellus orci ac auctor augue mauris viverra accumsan intro</p>
                                          <p class="testimonial-author">Lorem Ipsum - Designer</p>
                                      </div>
                                  </div>
                              ,
                              <div class="card">
                              <img class="card-image" src={test3} alt="alternative" />
                              <div class="card-body">
                                  <p class="testimonial-text">Praesent elementum facilisis leo vel rutrum quisque non tellus orci ac auctor augue mauris viverra accumsan intro</p>
                                  <p class="testimonial-author">Lorem Ipsum - Designer</p>
                              </div>
                          </div>
                      ,
    ];
    
    
const responsive = {
    0: {
        items: 2,
    },
    512: {
        items: 4,
    },
};
      

  return (
    
    <><div class="basic-2 bg-dark-blue">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2 class="h2-heading">Tortor Posuere</h2>
                      <p class="p-heading">Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan eros donec ac odio tempor orci dapibus ultrices in iaculis mauris a diam terib vica</p>

                      <div class="image-container">
                          <div class="video-wrapper">
                              <a class="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                                  <img class="img-fluid" src={video} alt="alternative" />
                                      <span class="video-play-button">
                                          <span></span>
                                      </span>
                                  </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div class="slider-1">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="slider-container">
                              <div class="swiper-container card-slider">
                                
                              <AliceCarousel mouseTracking
                               infinite
                               autoPlayInterval={1500}
                               animationDuration={1500}
                               disableDotsControls
                               disableButtonsControls
                               responsive={responsive}
                               autoPlay
                              
                              items={items}
                               />

                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div></>
  )
}

export default Fifthpage;


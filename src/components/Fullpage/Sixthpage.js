
import React from 'react'
import resource1 from '../images/resources-1.jpg';

import resource2 from '../images/resources-2.jpg';

import {Box, Modal} from '@material-ui/core';
import {CgClose} from "react-icons/cg"
import lightbox from "../images/details-lightbox.jpg";

const Sixthpage = () => {


    
  
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    
    bgcolor: 'purple',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  
  };



    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <><div id="purchase" class="basic-3 bg-dark-blue">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2 class="h2-heading">Ultrices Vitae Auctor Elit Uta</h2>
                      <p class="p-heading p-large">Aliquam purus sit amet luctus venenatis cursus turpis massa tincidunt dui ut ornare lectus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sitapien pellentesque habitant morbi tristique senectus cursus</p>
                      <a class="btn-solid-lg" href="#your-link" onClick={handleOpen}>$89 BUY</a> <a class="btn-outline-lg page-scroll" href="#registration">FREE TRIAL</a>
                      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
            <div class="row">
                <button title="Close (Esc)" type="button" class="mfp-close x-button" onClick={handleClose}><CgClose /></button>
                <div class="col-lg-8">
                    <div class="image-container">
                        <img class="img-fluid" src={lightbox} alt="alternative" />
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <h3>Lorem Ipsumus</h3>
                    <hr />
                    <p>A scelerisque purus semper eget duis at tellus at tellus rutrum tellus pellentesque eu tincidunt lacinia.</p>
                    <h4>Aliquet Sagittis</h4>
                    <p>Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Netus et malesuada fames ac vel orci porta</p>
                    <ul class="list-unstyled li-space-lg">
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body">Et netus et riba viter malesuada</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body">Fames ac pelle microne carvi ntesque</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body">Habitant morbi trumioc lobro tristique</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body">Etre netus etoli eriga venusi malesu</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body">Sollicitudin sit dorelor bolov amet</div>
                        </li>
                    </ul>
                  </div> 
            </div> 
      
            </Box>
     
      </Modal>
    




                  </div>
              </div>
          </div>
      </div><div class="basic-4 bg-dark-blue">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="resource-container">
                              <img class="img-fluid" src={resource1} alt="alternative" />
                              <div class="text-container">
                                  <h4>Decurs Usmetus</h4>
                                  <p>Eleifend mi in nulla posuere mollis aliquam ut porttitor leo a diam eget sit amet tellus cras netro veri</p>
                              </div>
                          </div>
                          <div class="resource-container">
                              <img class="img-fluid" src={resource2} alt="alternative" />
                              <div class="text-container">
                                  <h4>Posuere Molis</h4>
                                  <p>Eleifend mi in nulla posuere mollis aliquam ut porttitor leo a diam eget sit amet tellus cras netro veri</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div></> 


  )
}

export default Sixthpage



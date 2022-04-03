
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import details1 from "../images/details-1.jpg";
import details2 from "../images/details-2.jpg";
import lightbox from "../images/details-lightbox.jpg";
import "./popup.css";
import {Box, Modal} from '@material-ui/core';
import {CgClose} from "react-icons/cg"


const Fourthpage = (props) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
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
  
 
    
  return (
        <>
        <div id="details" class="basic-1 bg-dark-blue">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-xl-7">
                      <div class="image-container">
                          <img class="img-fluid" src={details1} alt="alternative" />
                      </div>
                  </div>
                  <div class="col-lg-6 col-xl-5">
                      <div class="text-container">
                          <h2>Adipiscing Elit Pesque</h2>
                          <p>Diam phasellus vestibulum lorem sed risus. Accumsan tortor posuere ac ut consequat. Porttitor rhoncus dolor purus non. Diam sollicitudin tempor id eura nevis</p>
                          <ul class="list-unstyled li-space-lg">
                              <li class="media">
                                  <i class="fas fa-square"></i>
                                  <div class="media-body"><strong>Sed pulvinar proin</strong> tristique senectus et netus etri</div>
                              </li>
                              <li class="media">
                                  <i class="fas fa-square"></i>
                                  <div class="media-body"><strong>Hendrerit lectus</strong> etus et malesuada fames ac turpis</div>
                              </li>
                          </ul>
                          <a class="btn-solid-reg popup-with-move-anim" href="/#" onClick={handleOpen}>LIGHTBOX</a>
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
          </div>
      </div><div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
              <div class="row">
                  <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
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
                      <a class="btn-solid-reg mfp-close page-scroll" href="#registration">FREE TRIAL</a> <button class="btn-outline-reg mfp-close as-button" type="button">BACK</button>
                  </div>
              </div>
          </div>
        <div className='tabs'>
<div class="container">
                  <div class="row">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
      <p>On yo mark</p>
  <div class="col-lg-6 col-xl-7">
      
                          <div class="image-container">
                              <img class="img-fluid" src={details2} alt="alternative" />
                          </div>
                      </div>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <p>you ready?</p>
  <div class="col-lg-6 col-xl-7">
      
                          <div class="image-container">
                              <img class="img-fluid" src={details1} alt="alternative" />
                          </div>
                      </div>
  
  </Tab>
  <Tab eventKey="contact" title="Contact">
  <p> Lets go there</p>
  <div class="col-lg-6 col-xl-7">
      
                          <div class="image-container">
                              <img class="img-fluid" src={details2} alt="alternative" />
                          </div>
                      </div>
    
  </Tab>
</Tabs>
</div></div>
</div>
          </> 

  )
}

export default Fourthpage;
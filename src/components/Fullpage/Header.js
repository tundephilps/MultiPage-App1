import React from 'react'
import "./Header.css";
import { BsList } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';





const Header = () => {

  let navigate = useNavigate();

  return (
    <nav className="navbar" id="Navloop">
      <div className='brand-title' onClick={() => {navigate("/");}}>Brand Name</div>
      <a href='/#' id='toggle-button'> <BsList  className="toggle-button"  /> </a>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
      
      
      <div className='navbar-links' id='navbar-links'>
        <ul>
          
          <li><a href='/#' onClick={() => {navigate("/");}}>Home</a></li>
          <li><a href='/#'>Contact</a></li>
          <li><a href  onClick={() => {navigate("/Article");}}>Articles</a></li>
          <li><a href onClick={() => {navigate("/Terms");}}>Terms and Conditions</a></li>
          <li><a href  onClick={() => {navigate("/Privacy");}}>Agreement</a></li>
       
        </ul>
      </div>
    </nav>
  )
}




export default Header;

window.onload = function(){
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]


toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active")
})

}
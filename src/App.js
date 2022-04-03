import React from 'react';
import Footer from './components/Footer';
import "./components/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Navbar from './components/Navbar';
import Header from './components/Fullpage/Header';
import Article from './components/Otherpages/Article';
import Privacy from './components/Otherpages/Privacy';
import Terms from './components/Otherpages/Terms';
import Fullpage from './components/Fullpage/Fullpage';


function App() {
    return (<div>


<Router>
<Header />
<Routes>
                <Route path="/" element={<Fullpage />} />
                <Route path="/Privacy" element={ <Privacy />} />
                <Route path="/Article" element={<Article />} />
                <Route path="/Terms" element={<Terms />} />
               
               </Routes>
           
        </Router>       
   
        <Footer />
    </div>  );
}

export default App;


window.onload = function(){
    const toggleButton = document.getElementsByClassName("toggle-button")[0]
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    
    
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active")
    })
    
    }



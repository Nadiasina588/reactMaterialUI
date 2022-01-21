import React from 'react'
import "./Navbar.css";

 const Navbar = () => {

     
  return (
    <>
     <nav className="navbar">
        <div className="max-width_navbar">
            <div className="logo">
                <a href="#">2NM</a>
            </div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#services" className="menu-btn">Services</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#teams" className="menu-btn">Team</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
      
    </>
  )
}
export default Navbar;

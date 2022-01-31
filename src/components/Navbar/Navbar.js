import React, { useEffect } from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const hanleCursor = (e) => {

      const btnMenu = document.querySelector(".menu-btn_bar ");
      const menu = document.querySelector(".menu");
      btnMenu.addEventListener("click", () => {

        menu.classList.toggle("active");
      });
    };
  }, []);

  return (
    <>
      <nav className="navbar">
  
        <div className="max-width_navbar">
          <div className="logo">
            <a href="#">2NM</a>
          </div>
          <ul className="menu">
            <li>
              <NavLink to="/" className="menu-btn">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu-btn">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="menu-btn">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="menu-btn">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="menu-btn">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="menu-btn">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="menu-btn_bar">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

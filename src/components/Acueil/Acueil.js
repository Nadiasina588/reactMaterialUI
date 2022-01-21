import React from "react";
import "./Acueil.css";
import Me from "../../image/home.svg";
import Node from "../../image/icons8-bootstrap.svg";
import Javascript from "../../image/icons8-node-js.svg";
import React_native from "../../image/icons8-symfony.svg";

const Acueil = () => {
  return (
    <>
      <div className="container">
          <div className="container_left">
            <div className="container_left_name">
              <h2 className="intro">Hi, My name is</h2>
              <h1 className="intro_name">NADIASINA Nico</h1>
              <div className="item_class">
                <div className="item_class_name">
                  <div className="item_class_title">Web developer </div>
                  <div className="item_class_title">mobile developer </div>
                  <div className="item_class_title">software engineer </div>
                  <div className="item_class_title">web Integrator </div>
                </div>
              </div>
              <div className="description">
                Dangerous skills with outstanding attention to detail , I
                msoftware developer and mobile Developer , web Integrator
              </div>
              <div className="experience-home">
                <span className="experience-badge">
                  <img src={Node} alt="" className="images" /> React JS
                </span>
                <span className="experience-badge">
                  <img src={Javascript} alt="" className="images" /> Symfony
                </span>
                <span className="experience-badge">
                  <img src={React_native} alt="" className="images" />
                  React Native
                </span>
              </div>
              <a href="#about" className="button_acueil">
                <i class="fa fa-angle-down fa_icon"> </i>
                  More About Me
              </a>
            </div>
          </div>
          <div className="container_right">
            <img src={Me} alt="" className="image_right" />
            
          </div>
        
      </div>
    </>
  );
};
export default Acueil;

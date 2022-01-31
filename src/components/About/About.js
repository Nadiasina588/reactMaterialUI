import React from "react";
import "./About.css";
import profile from "../../image/loh.jpg";
import Node from "../../image/icons8-bootstrap.svg";
import Javascript from "../../image/icons8-node-js.svg";
import React_native from "../../image/icons8-symfony.svg";

const About = () => {
  return (
    <div className="about">
        <div className="about_left">
          <div className="about_left_image">
            <img src={profile} alt="image" className="images_profile" />
          </div>
        </div>

        <div className="about_right">
          <h1 className="title_about"> About Me </h1>
          <p className="title_about_sub">
            I have built mobile & web applications professionnaly for over 3
            years.
          </p>
          <div className="text-first">
            <span className="experience-badge">
              <img src={Node} alt="" className="images" /> React JS
            </span>
            <span className="experience-badge">
              <img src={Javascript} alt="" className="images" /> Node JS
            </span>
            <span className="experience-badge">
              <img src={React_native} alt="" className="images" />  Symfony
            </span>
            <small>are my favorite weapons</small>
          </div>
          <p className="title_about_description">
            Passionnate, with an Engineer background, I see the big picture of
            how it's more than just software{" "}
          </p>
          <a href="nico.pdf" download="nico.pdf" className="button_about"> 
                        <i class="fas fa-cloud-download-alt fa_icon"> </i>
                         Download Resume</a>
        
      </div>
    </div>
  );
};
export default About;

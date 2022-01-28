import React from "react";
import "./Services.css";
import Node from "../../image/icons8-bootstrap.svg";
import Javascript from "../../image/icons8-node-js.svg";
import React_native from "../../image/icons8-symfony.svg";

const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="max-width_services">
          <h2 className="title">Proffesionnel Skils</h2>
          <div className="serv-content">
            <div className="card_service">
              <div className="box_service">
                <div className="box__1">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h5 className="text">Web Design & integration</h5>
                <div className="experience">
                  <span className="experience-badge">
                    <img
                      src={Node}
                      alt=""
                      className="images"
                    />{" "}
                    Bootstrap
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Javascript}
                      alt=""
                      className="images"
                    />{" "}
                    Sass
                  </span>
                  <span className="experience-badge">
                    <img
                      src={React_native}
                      alt=""
                      className="images"
                    />{" "}
                    Adobe XD
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Node}
                      alt=""
                      className="images"
                    />{" "}
                    Materialize
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Node}
                      alt=""
                      className="images"
                    />{" "}
                    tailwind CSS
                  </span>
                </div>
              </div>
            </div>
            <div className="card_service">
              <div className="box_service">
                <div className="box__1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h5 className="text">Web Developpement</h5>
                <div className="experience">
                  <span className="experience-badge">
                    <img
                      src={Node}
                      alt=""
                      className="images"
                    />{" "}
                    MERN Stack
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Javascript}
                      alt=""
                      className="images"
                    />{" "}
                    Node JS
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Javascript}
                      alt=""
                      className="images"
                    />{" "}
                    React JS
                  </span>

                  <span className="experience-badge">
                    <img
                      src={React_native}
                      alt=""
                      className="images"
                    />{" "}
                    Next JS
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Node}
                      alt=""
                      className="images"
                    />{" "}
                    Symfony
                  </span>
                  <span className="experience-badge">
                    <img
                      src={Javascript}
                      alt=""
                      className="images"
                    />{" "}
                    Worpress
                  </span>
                </div>
              </div>
            </div>
            <div className="card_service">
              <div className="box_service">
                <div className="box__1">
                  <i className="fas fa-code"></i>
                </div>
                <div className="text">Mobile Apps</div>
                <div className="experience">
                  <span className="experience-badge">
                    <img
                      src={Node}
                      alt=""
                      className="images"
                    />{" "}
                    React Native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

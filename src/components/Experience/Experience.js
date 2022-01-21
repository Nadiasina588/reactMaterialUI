import React from "react";
import "./Experience.css";
import Exp from "../../image/contact.svg";



const Experience = () => {
  return (
    <div>
      <section className="skills" >
        <div className="max-width">
          <h2 className="title">Experiences</h2>
          <div className="skills-content">
            <div className="column_left">
              <div className="text">Work and Experience</div>
              <div className="work">
                <h6 className="enterprise">
                  <i className="fa fa-building basecolor"></i>
                  <strong className="enterprise-logo">Freelance</strong>{" "}
                </h6>
                <small>Octobre 2021 - Decembre 2021</small>

                <p>
                  <small>Software Engineer, MERN Stack Developer</small>
                </p>
              </div>

              <div className="work">
                <h6 className="enterprise">
                  <i className="fa fa-building basecolor"></i>
                  <strong className="enterprise-logo">Relia Consulting</strong>
                </h6>
                <small>Mars 2021 - Aout 2021</small>
                <p>
                  <small>Software Engineer, MERN Stack Developer</small>
                </p>
              </div>
              <div className="work">
                <h6 className="enterprise">
                  <i className="fa fa-building basecolor"></i>
                  <strong className="enterprise-logo">MoraLogiq</strong>
                </h6>
                <small>Juin 2021 - Sept 2021</small>
                <p>
                  <small>Consultant, Integrateur</small>
                </p>
              </div>
            </div>
            <div className="colum_right">
             <img src={Exp} alt="" />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
export default Experience;

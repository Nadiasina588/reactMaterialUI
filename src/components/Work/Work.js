import React from "react";
import "./Work.css";
import Image from "../../image/image.png"

import Portfolio from "../../image/portfolio.png";
import Maka from "../../image/maka.png";

const Work = () => {
  return (
    <div>
      <section className="teams" >
        <div className="max-width_work">
          <h2 className="title">My Recents Works</h2>
          <div className="carousel owl-carousel">

            <div className="card box">
              <div className="box">
                <img src={Image} alt="" className="image_work"/>
                <div className="text_work">OZAMBA Sport</div>
                <p class="text_work_p">Integration Maquette width HTML & CSS & JS</p>
              </div>
            </div>

            <div className="card box">
              <div className="box">
                <img src={Portfolio} alt="" className="image_work" />
                <div className="text_work">Portfolio</div>
                <p class="text_work_p">HTML CSS JS</p>
              </div>
            </div>

            <div className="card box">
              <div className="box">
                <img src={Maka} alt="" className="image_work" />
                <div className="text_work">Gestion Congés</div>
                 <p class="text_work_p">MERN STACK JS.</p>
              </div>
            </div>
             <div className="card box">
              <div className="box">
                <img src={Maka} alt="" className="image_work" />
                <div className="text_work">Gestion vente de zebu</div>
                <p class="text_work_p">Symfony.</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};
export default Work;

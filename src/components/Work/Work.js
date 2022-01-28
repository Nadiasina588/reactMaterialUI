import React from "react";
import "./Work.css";
import Image from "../../image/image.png";

import Portfolio from "../../image/portfolio.png";
import Maka from "../../image/voiture.png";

const Work = () => {
  return (
    <div>
      <section className="teams">
        <div className="max-width_work">
          <h2 className="title">My Recents Works</h2>
          <div className="carousel owl-carousel">
            <div className="card box">
              <div className="box">
                <img src={Image} alt="" className="image_work" />
                <div className="text_work">OZAMBA Sport</div>
                <p class="text_work_p">
                  Integration Maquette width HTML & CSS & JS
                </p>
              </div>
            </div>

            <div className="card box">
              <div className="box">
                <img src={Portfolio} alt="" className="image_work" />
                <div className="text_work">Portfolio</div>
                <p class="text_work_p">Made with React JS </p>
                <div className="box_code">
                  <div className="box_code_source">
                    <a className="btn_box_code_source" href="">code source</a>
                  </div>
                  <div className="box_code_lien">
                    <a className="btn_box-code_lien" href="">
                      regarder l'application
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card box">
              <div className="box">
                <img src={Maka} alt="" className="image_work" />
                <div className="text_work">Gestion voitures</div>
                <p class="text_work_p">Made with Symfony</p>
                <div className="box_code">
                  <div className="box_code_source">
                    <a className="btn_box_code_source" href="">code source</a>
                  </div>
                  <div className="box_code_lien">
                    <a className="btn_box-code_lien" href="">
                      regarder l'application
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card box">
              <div className="box">
                <img src={Maka} alt="" className="image_work" />
                <div className="text_work">Gestion vente de zebu</div>
                <p class="text_work_p">Made with Symfony.</p>
                <div className="box_code">
                  <div className="box_code_source">
                    <a className="btn_box_code_source" href="">code source</a>
                  </div>
                  <div className="box_code_lien">
                    <a className="btn_box-code_lien" href="">
                      regarder l'application
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Work;

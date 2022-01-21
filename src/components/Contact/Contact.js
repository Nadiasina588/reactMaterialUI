import React , {useContext} from "react";
import "./Contact.css";

import Contacts from "../../image/contact.svg";
import { ThemeContext } from "../../context"


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <section className="contact" >
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column_left">
              <p>Let's talk about your new project idea!</p>
              <small>
                Feel free to leave me a message. I will reply it as soon as
                possible
              </small>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="sub-title">+261 34 03 375 51 </div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="sub-title">Namontana Antananarivo</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="sub-title">nadiasinanicodev@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column_right">
              <p className="description">
                <b> What's your story</b> Get in touch. Always available
                freelancing if the right project comes along me.
              </p>
              <form className="form">
                <input  style={{backgroundColor: darkMode && "#010413"}} type="text" placeholder="Name" />
                <input style={{backgroundColor: darkMode && "#010413"}} type="text" placeholder="Subject" />
                <input style={{backgroundColor: darkMode && "#010413"}} type="text" placeholder="Email" />
                <textarea rows="5"
                  style={{backgroundColor: darkMode && "#010413"}} type="text"
                  placeholder="Entre vos messages et critique" 
                ></textarea>
                <button type="submit" className=" btn">
                  <i className="fa fa-check"> </i> Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

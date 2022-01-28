import React, { useContext, useRef , useState} from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Contacts from "../../image/contact.svg";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const [done , setDone] = useState(false);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2jjgotj",
        "template_pxtio7c",
        form.current,
        "user_iNBNUNW0fWcrH3iIoKXlF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section className="contact">
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
              <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                  style={{ backgroundColor: darkMode && "#010413" }}
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                />
                <input
                  style={{ backgroundColor: darkMode && "#010413" }}
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                  required
                />
                <input
                  style={{ backgroundColor: darkMode && "#010413" }}
                  type="text"
                  required
                  placeholder="Email"
                  name="user_email"
                />
                <textarea
                  rows="5"
                  required
                  style={{
                    color: "#fff",
                    resize: "none",
                    backgroundColor: darkMode && "#010413",
                  }}
                  type="text"
                  placeholder="Entre vos messages et critique"
                  name="message"
                ></textarea>

                <input type="submit" value="Envoyer" className="btn" />
                 {done &&  <button className="envoyer_btn">  Merçie a vous !!</button> }
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;

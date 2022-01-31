import React from "react";
import Acueil from "../Acueil/Acueil";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Acueil />
        <About />
        <Services />
        <Work />
        <Experience />
        <Contact />
      </div>
    );
  }
}
export default Portfolio;

import React from "react";
import Acueil from "../Acueil/Acueil";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import PageMenu from "../PageMenu/PageMenu";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";

class Portfolio extends React.Component {
  render(){

  return (
    <div>
   
     <Navbar />
        
      <Routes>
        <Route path="/" element={<PageMenu />} />
        <Route path="/acueil" element={<Acueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    
    </div>
  );
  }
};
export default Portfolio;

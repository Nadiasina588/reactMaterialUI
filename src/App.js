

import React, {useContext} from 'react';
import Acueil from "./components/Acueil/Acueil";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./context";
    
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor:darkMode ? "#010413": "white",
    color: darkMode && "white"}}>
    <Navbar />
    <Acueil />
    <About />
     <Services />
     <Experience />
    <Work />
    <Contact />
    <Footer/>

    </div>
  )
}
export default App;
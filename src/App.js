

import React, {useContext} from 'react';
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import {BrowserRouter} from "react-router-dom";

import { ThemeContext } from "./context";
    
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor:darkMode ? "#010413": "white",
    color: darkMode && "white"}}>
    <BrowserRouter>
    <Portfolio />
   
    </BrowserRouter>

    </div>
  )
}
export default App;
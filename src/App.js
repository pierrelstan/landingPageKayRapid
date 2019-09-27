import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faHome,
  faAddressCard,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";
import Home from "./components/home";
import Contact from "./components/contact";
// import ScrollToTop from "./components/scrolltotop";
// import styled from "styled-components";

library.add(fab, faBars, faTimes, faHome, faAddressCard, faPhone);

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Home />
        <AboutUs />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

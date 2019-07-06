import React from 'react';

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";
import Mission from "./components/mission";
import Contact from "./components/contact";
import styled from "styled-components";

library.add(fab, faCheckSquare, faBars, faTimes);

const MainContainer = styled.div`
font-family: 'Josefin Sans', sans-serif;
line-height: 1.15;
`;



function App() {
  return (
    <MainContainer>
     <Header />
     <AboutUs />
     <Mission />
     <Contact />
     <Footer />
    </MainContainer>
  );
}

export default App;

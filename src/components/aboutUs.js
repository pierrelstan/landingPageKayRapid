import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../logo.svg';

const Container = styled.div`
height: 100vh;
margin:auto;
display:grid;
grid-template-columns: repeat(2, 1fr);
/* grid-template-columns: 300px 300px; */
  grid-gap: 10px;
  padding-left: 100px;
padding-right: 100px;
`;

const ImageWidth = styled.div`
width:80%;
`;

const Centered = styled.div`
display:flex;
justify-content:center;
align-items:center;

`;



const AboutUs=()=> (
    <Container id="about">
        <Centered>
        <ImageWidth>
            <img  src={logo} alt="lo"/>
            </ImageWidth>
            </Centered>
        
        <Centered>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. , voluptas voluptatum vel assumenda nulla unde aut incidunt ut dicta corrupti exercitationem 
            </p>
        </Centered>
    </Container>
);
export default AboutUs;
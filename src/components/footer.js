import React from "react";
import styled from "styled-components";

const FooterContainer= styled.div`
position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  height: 50px;
`;

const CenteredFooter = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const Footer = ()=> (
    <FooterContainer>
      <CenteredFooter>
        <p>Copyright © 2019 KayRapid</p>
        </CenteredFooter>
    </FooterContainer>
);
export default Footer;
import React from "react";
import {FaLinkedin,FaFacebook,FaTwitter,FaWhatsapp } from 'react-icons/fa';

import './css/footer.css';

const Footer = ()=> (
    <div className="Footer">
        <ul className="icons">
        <li className="facebook"><FaFacebook/></li>
        <li className="twitter"><FaTwitter/></li>
        <li className="whatsapp"><FaWhatsapp/></li>
        <li className="linkedin"><FaLinkedin/></li>
        </ul>
      
      <div className="copyright">
        <p>Copyright © 2019 KayRapid.com</p>
        </div>
    </div>
);
export default Footer;
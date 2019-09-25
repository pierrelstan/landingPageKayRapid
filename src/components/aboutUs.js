import React from "react";
import locationLogo from '../locationLogo.jpeg';
import './css/aboutUs.css';

const AboutUs=()=> (
    <div className="containerAbout" id="about">
          <h1 className="titleAbout">About us </h1>
        <div className="centered_about">
        <div className="paLoremragraph_about">
        <p><span className="begin_about">Nou</span>  se Yon konpayi 100% Ayisyen ki la pou edew jwenn kay wap chache a nan nenpot kondisyon.
Ou ka fé sa apati aplikasyon mobil nou yo oubyen sit wèb nou an.
Ou gen posibilite pou chwazi tip:
<span className="begin_about_one"> kay ou vle a,</span> <span className="begin_about_one"> zon ou vle chèche a e </span> <span className="begin_about_one"> pri kay ou teren kap bon pou ou a.</span> 
            </p>
            </div>
        <div className="containerAbout">
            <img   className="logoabout" src={locationLogo} alt="locationLogo"/>
            </div>
            
        
        </div>
    </div>
);
export default AboutUs;
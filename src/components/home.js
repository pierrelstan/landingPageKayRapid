import React from "react";
import {FaDownload ,FaApple, FaGooglePlay} from 'react-icons/fa';
import './css/home.css';
import logokay from "../logokay.jpg";


const Home = ()=> (
    <div>
        <div className="home_container" id="home">
            <div className="centered_Home">
            <div className="image-container">
                    <img className="logotwo" src={logokay } alt="logoTwo"/>
                </div>
            <div className="paragraph_home" >
            <p className="paragraph"> <span className="begin_home">Kay Rapid</span> se Yon konpayi  ki fonde nan lane 2018 avek pou objektif revolisyone mache imobilye a nan peyi a.
Sevis nou ofri yo pèmet kliyan an pi mèt tèt li épi pi lib nan chwazi kay li vle a tou . Janl vle l la nan mezi mwayen lap ka rive </p>
            <div className="btn-container">
            <button className="btn-download"><FaApple/> App Store</button>
            <button className="btn-download"><FaGooglePlay/> Play Store</button>

            </div>
            </div>
            
            </div>
            </div>
    </div>
);
export default Home;
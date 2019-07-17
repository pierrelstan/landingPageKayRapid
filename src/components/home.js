import React from "react";
import {FaDownload} from 'react-icons/fa';
import './css/home.css';
import logokay from "../logokay.jpg";


const Home = ()=> (
    <div>
        <div className="home_container" id="home">
            <div className="centered_Home">
                <div className="image-container">
                    <img className="logotwo" src={logokay } alt="logoTwo"/>
                {/* <h2 className="title_home">Home</h2> */}
                </div>
            <div className="paragraph_home" >
                {/* <h1>Home</h1> */}
            <p className="paragraph"> <span className="begin_home">Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Quia iste nesciunt quasi, fugiat similique, quidem aliquam hic magnam, ipsam ab ipsum 
            equi distinctio rerum facere incidunt consequatur dolor odio laborum?</p>
            <div className="btn-container">
            <button className="btn-download"> <FaDownload/> Download Application</button>

            </div>
            </div>
       
            </div>
            </div>
    </div>
);
export default Home;
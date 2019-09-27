import React from "react";
import './css/scrollToTop.css';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from "react-scroll";

class  ScrollToTop extends React.Component {
   

render(){
    return (
        <div>
            <Link
         className="nav-links"
       activeClass="active"
       to="tope"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}
   > <button className="myBtn" title="Go to top"><FaChevronUp /></button>
       </Link>
        </div>
    )
}
}

export default ScrollToTop;

import React from "react";
import { Link } from "react-scroll";
import { faBars, faTimes,faHome, faAddressCard, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/header.css';
import kayrapid from "../kayrapid.png";


class  Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      active:true
  }
  }
  

    handleClick=()=>{
        this.setState(state => ({
          active: !state.active,
        }));
      }
      

    render(){
    
        return (
            <div className="navbar">
            <div className="navbar-toggle"  onClick={this.handleClick}>
               <i><FontAwesomeIcon icon={this.state.active ? faBars : faTimes }/></i>
            </div>
            <Link
       to="tope"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}>
           <div><img className="logo" src={kayrapid} alt="logo"/></div>
           </Link>
          
         <ul className={this.state.active ? `main-nav` :`active_Nav`}>
        <li className=" home__border-top"><Link
         className="nav-links"
         
       activeClass="active"
       to="home"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}
   ><FontAwesomeIcon icon={faHome }/>home</Link>
   </li>
   <li>
   <Link
    className="nav-links"
       activeClass="active"
       to="about"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}
   ><FontAwesomeIcon icon={faAddressCard }/> about</Link>
   </li>
   <li>
   <Link
   className="nav-links"
       activeClass="active"
       to="contact"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}
   ><FontAwesomeIcon icon={faPhone} />Contact us</Link>
   </li>
   
         </ul>
       </div>
        );
    }
   
};
export default Navbar;
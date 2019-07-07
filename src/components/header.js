import React from "react";
import { Link } from "react-scroll";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/header.css';


class  Header extends React.Component {
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
            <div className="navbar" Height={this.state.active}>
            <div className="navbar-toggle"  onClick={this.handleClick}>
               <i><FontAwesomeIcon icon={this.state.active ? faBars : faTimes }/></i>
            </div>
            <Link
       activeClass="active"
       to="about"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}>
           <div className="logo">KayRapid</div>
           </Link>
          
         <ul className={this.state.active ? `main-nav` :`active`} show={this.state.active}>
        <li> <Link
         className="nav-links"
       activeClass="active"
       to="about"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}
   >About us</Link>
   </li>
   <li>
   <Link
    className="nav-links"
       activeClass="active"
       to="mission"
       spy={true}
       smooth={true}
       offset={0}
       duration= {500}
   >Mission</Link>
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
   >Contact</Link>
   </li>
   
         </ul>
       </div>
        );
    }
   
};
export default Header;
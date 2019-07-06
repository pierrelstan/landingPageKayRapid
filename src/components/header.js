import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class  Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      active:true,
      icons:"faBars"
  }
  }
  

    handleClick=()=>{
        this.setState(state => ({
          active: !state.active,
        }));
      }
      

    render(){
    
        return (
            <div Height={this.state.active}>
            <div  onClick={this.handleClick}>
               <i><FontAwesomeIcon icon={this.state.active ? faBars : faTimes }/></i>
            </div>
           <a>
           <div className="logo" href="#">KayRapid</div>
           </a>
          
         <ul  show={this.state.active}>
        <li> <Link
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
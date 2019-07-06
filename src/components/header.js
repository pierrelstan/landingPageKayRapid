import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarToggle = styled.span`
position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer; 
    color: rgba(255,255,255,0.8);
    font-size: 24px;
`;


const Navbar = styled.div`
 position: fixed;
     top: 0;
       width:100%;
       /* background-color:#623D8C; */
       background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

       color:#fff;
       height: ${props => props.Height ? "50px" : "200px"};

li {
    text-align: center;
    margin: 15px auto;
    text-transform:Uppercase;
}

@media screen and (max-width: 768px) {
li {
  text-align:none;
  margin:0px;
  text-transform:Uppercase;
}
}
`;

const MainNav = styled.ul`
  list-style-type: none;

    display:${props=> props.show? "none" : "block"};  

    @media(max-width:768px){
     /* display:${props=> props.show ? "flex" :"none"} */
    }
`;




const LogoApp = styled.a`
     display: inline-block;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 20px;
`;

const RemoveFaTimeAndfaBars = styled.span`
@media (min-width:768px){
  /* display:none */
}
`;

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
            <Navbar Height={this.state.active}>
            <RemoveFaTimeAndfaBars  onClick={this.handleClick}>
               <i><FontAwesomeIcon icon={this.state.active ? faBars : faTimes }/></i>
            </RemoveFaTimeAndfaBars>
           <LogoApp>
           <div className="logo" href="#">KayRapid</div>
           </LogoApp>
          
         <MainNav  show={this.state.active}>
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
   
         </MainNav>
       </Navbar>
        )
    }
   
};
export default Header;
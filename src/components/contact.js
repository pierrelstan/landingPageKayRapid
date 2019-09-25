import React from "react";
import { FaHeadset,FaRegComments } from 'react-icons/fa';
import "./css/contact.css";


function Contact (){
return(
    <div className="contact_container" id="contact">
 <h1 className="titleContact">Contact Us </h1>
   <div className="centered_card">
        <div className="container_card">
        <div className="card">
    <span className="headset"> <FaHeadset /></span>
  <div className="container">
    <h2 className="subtitle_contact"><b>By Phone</b></h2>
    <small>(Monday to Friday, 9am to 6pm PST)</small>
					<br />
					Phone 1:<br />
					1-877-930-7483
					<br></br >
					Phone 2:<br />
					1-604-637-0780
				
  </div>
</div> 

<div className="card">
    <span className="headset"> <FaRegComments /></span>
  <div className="container">
    <h2 className="subtitle_contact"><b>Live Chat</b></h2>
    <p className="liveChat">Chat with a member of our in-house team.</p>
    <button className="btn-chat">Start Chat</button>
  </div>
</div> 
</div>
</div>
</div>
)
}
export default Contact;
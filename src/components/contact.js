import React from "react";
import styled from "styled-components";

const Centered = styled.div`
display:flex;
justify-content:center;
align-items:center;
h2 {
    text-align:center;
    font-size:80px;
}
}
p{
    font-size: 16px;
}
`;

const AddedVh = styled.div`
display:grid;
height: 100vh;
padding-left: 100px;
padding-right: 100px;
p{
    margin:auto;
}
`;
const Contact = ()=> (
    <AddedVh id="contact">
        <Centered>
            <div>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam voluptatum incidunt in sequi modi, sunt ab veniam rem nostrum quae accusamus quia non sint dolores iusto? Id, vel dolorem.</p>
        </div>
        </Centered>
        
    </AddedVh>
);

export default Contact;
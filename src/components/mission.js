import React from "react";
import styled from "styled-components";

const Centered = styled.div`
display:flex;
justify-content:center;
align-items:center;

h2{
    text-align:center;
    font-size:80px;
}

p{
    font-size: 16px;
}

`

const ContainerMiission = styled.div`
display:grid;
height: 100vh;
padding-left: 100px;
padding-right: 100px;
p{
    margin:auto;
}
`;

const Mission = ()=> (
    <ContainerMiission >
        <Centered id="mission">
            <div>
            <h2>Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste nesciunt quasi, fugiat similique, quidem aliquam hic magnam, ipsam ab ipsum 
            equi distinctio rerum facere incidunt consequatur dolor odio laborum?</p>
            </div>
            </Centered>
    </ContainerMiission>
);
export default Mission;
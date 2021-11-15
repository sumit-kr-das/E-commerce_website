import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    background: linear-gradient(to right, #13A898, #29CAB9);
    color: #fff;
    font-weight: 500;
    padding: 0.2rem 0;
    text-align: center;
    font-size: 12;
    ${mobile({ fontSize: "10px" })}
`;


const Announcement = () =>{
    return(
        <Container>
            Special Offer! Free Shipping on Orders Over $45
        </Container>
    )
}

export default Announcement;
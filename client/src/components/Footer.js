import React from 'react';
import styled from "styled-components";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Call, LocationOn, Mail } from "@material-ui/icons";


const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    margin: 20px;
`;
const Middle = styled.div`
    flex: 1;
    margin: 20px;
`;
const Right = styled.div`
    flex: 1;
    margin: 20px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
const IconWrapper = styled.div`
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`;
const Title = styled.h1`
    margin-bottom: 10px;
`;
const Des = styled.p`
    
`;
const Heading = styled.h2`
    margin-bottom: 10px;
`;
const UnorderList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    list-style: none;
    width: 50%;
    padding-bottom: 0.5rem;
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const ContactImg = styled.img`

`;

const Footer = () =>{
    return(
        <Container>
            <Left>
                <Title>Store.</Title>
                <Des>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus placeat veritatis eveniet pariatur, iure rerum quaerat numquam tempore recusandae alias cumque exercitationem ut ipsa unde similique repellat beatae dolore!</Des>
                <Wrapper>
                    <IconWrapper style={{background: "#4867AA"}}>
                        <FacebookIcon />
                    </IconWrapper>
                    <IconWrapper style={{background: "#F73D6F"}}>
                        <InstagramIcon />
                    </IconWrapper>
                    <IconWrapper style={{background: "#2BA5DA"}}>
                        <TwitterIcon />
                    </IconWrapper>
                    <IconWrapper style={{background: "#5A3070"}}>
                        <GitHubIcon />
                    </IconWrapper>
                </Wrapper>
            </Left>
            <Middle>
                <Heading>Useful Links</Heading>
                <UnorderList>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </UnorderList>
            </Middle>
            <Right>
                <Heading>Contact</Heading>
                <ContactItem>
                    <LocationOn style={{marginRight: "10px"}} /> Sector 2 Collage Street Kalkata 1004
                </ContactItem>
                <ContactItem>
                    <Call style={{marginRight: "10px"}} /> +91 7074397400
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight: "10px"}} /> contact.sumitkrdas@gmail.com
                </ContactItem>
                <ContactItem>
                    <ContactImg src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer;
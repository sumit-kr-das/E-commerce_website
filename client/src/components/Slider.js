import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { sliderItems } from '../raw/data';
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #D7DBDD;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 0.5s ease;
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`
    flex: 1;
    height: auto;
`;
const Image = styled.img`
    width: 80%;
    height: 500px;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 40px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    border: 1px solid #ABB2B9;
`;

const Slider = () =>{
    const [slideIndex, setSlideIndex] = useState(0);
    console.log(slideIndex);
    const handleClick = (direction) =>{
        if(direction === "left"){
            
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
            console.log(slideIndex);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    }

    return(
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map(item=>(
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider;
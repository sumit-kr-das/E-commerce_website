import React from 'react';
import styled from "styled-components";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';

const Info = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div`
    margin: 5px;
    min-width: 280px;
    height: 350px;
    flex: 1;
    background-color: #F4F6F6;
    /* background-color: #EAEDED; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s ease;
    &:hover ${Info} {
        opacity: 1;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 75%;
    object-fit: contain;
    z-index: 2;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ffffff;
    position: absolute;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .5rem;
    transition: all 0.5s ease-out;
    &:hover {
        background-color: #EBF5FB;
        transform: scale(1.1);
    }
`;

const Product = (item) =>{
    return(
        <Container>
            <Image src={item.product.img} />
            <Circle />
            <Info>
                <Icon>
                    <AddShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <Link to={`/product/${item.product._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
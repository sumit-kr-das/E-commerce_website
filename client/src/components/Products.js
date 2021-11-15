import React from 'react';
import styled from "styled-components";
import { popularProducts } from '../raw/data';
import Product from "./Product";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`;

const Products = () =>{
    return(
        <Container>
            {
                popularProducts.map(item=>(
                    <Product key={item.key} img={item.img} />
                ))
            }
        </Container>
    )
}

export default Products;
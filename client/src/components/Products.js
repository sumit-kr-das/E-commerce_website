import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { popularProducts } from '../raw/data';
import Product from "./Product";
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`;

const Products = ({cat, filters, sort}) =>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async() =>{
            try{
                const res = await axios.get( cat ? `/api/products?category=${cat} ` : "/api/products");
                console.log(res)
            }catch(err){
                console.log(err.message);
            }
        }
        getProducts();
    },[cat])
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
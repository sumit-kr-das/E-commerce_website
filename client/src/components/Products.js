import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../raw/data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        // get all product query
        const res = await axios.get(
          cat ? `/api/products?category=${cat} ` : "/api/products"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {
        cat 
        ? filterProducts.map((item) => (
            <Product key={item._id} img={item.img} />
          ))
        : products.slice(0, 8).map((item) => <Product key={item._id} img={item.img} />)
      }
    </Container>
  );
};

export default Products;

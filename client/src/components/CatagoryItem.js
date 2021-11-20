import { ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  position: relative;
  padding: 4px;
`;
const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  font-weight: 500;
`;

const CatagoryItem = ({ img, title, cat }) => {
  return (
    <Container>
      <Link to={`/products/${cat}`}>
        <Img src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CatagoryItem;

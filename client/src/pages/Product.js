import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useLocation } from "react-router";
import axios from "axios";
import { publicRequest } from "../requestMethood";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Title = styled.h1`
  font-weight: 200;
  font-size: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 40px;
`;
const ImageContainer = styled.div`
  flex: 1;
  width: 50%;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  /* border: 1px solid #000; */
`;
const InfoContainer = styled.div`
  flex: 1;
  width: 50%;
  margin-left: 20px;
`;
const Desc = styled.p`
  margin: 1rem 0;
`;
const Price = styled.p`
  font-size: 25px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.p`
  font-size: 21px;
  font-weight: 400;
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border: 1px solid gray;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CartNumber = styled.span`
  border: 1px solid teal;
  border-radius: 4px;
  padding: 5px 10px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  flex: 1;
  margin: 10px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #fff;
  border: 1px solid teal;
  font-weight: 400;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleClick = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleSubmit = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleClick("dec")} />
              <CartNumber>{quantity}</CartNumber>
              <AddIcon onClick={() => handleClick("inc")} />
            </AmountContainer>
            <AmountContainer>
              <Button onClick={handleSubmit}>ADD TO CART</Button>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;

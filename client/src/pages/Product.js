import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Container = styled.div`

`;
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
    background-color: ${props=>props.color};
`;
const FilterSize = styled.select`
    padding: 10px;
    margin-left: 10px;
    border: none;
    border: 1px solid gray;
`;
const FilterSizeOption = styled.option`
`;
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
const Button= styled.button`
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



const Product = () =>{
    return(
        <Container>
            <Announcement />
            <Navbar />
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>This is the Title</Title>
                        <Desc>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum</Desc>
                        <Price>$ 500</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="blue" />
                                <FilterColor color="gray" />
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <RemoveIcon/>
                                <CartNumber>2</CartNumber>
                                <AddIcon/>
                            </AmountContainer>
                            <AmountContainer>
                                <Button>ADD TO CART</Button>
                            </AmountContainer>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product;
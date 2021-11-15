import styled from "styled-components"
import CatagoryItem from "./CatagoryItem";
import { categories } from "../raw/data"


const Container = styled.div`
    display: flex;
`;


const Catagories = () =>{
    return(
        <Container>
            {
                categories.map(item=>(
                    <CatagoryItem key={item.id} img={item.img} title={item.title} />
                ))
            }
        </Container>
    )
}

export default Catagories;
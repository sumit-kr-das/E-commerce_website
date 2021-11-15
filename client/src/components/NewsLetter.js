import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';

const Container = styled.div`
    display: flex;
    height: 300px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #EBF5FB;
`;
const Title = styled.h1`
    font-size: 60px;
`;  
const Des = styled.p`
    font-size: 21px;
    margin: 0.5rem 0;
`;
const InputContainer = styled.div`
    margin-top: 1rem;
    width: 50%;
    height: 40px;
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input`
    background-color: #fff;
    display: flex;
    flex: 8;
    border: none;
    padding-left: 20px;
`;
const Button = styled.button`
    color: #fff;
    background-color: #16A085;
    border: none;
    flex: 1;
`;

const NewsLetter = () =>{
    return(
        <Container>
            <Title>Newsletter</Title>
            <Des>Get timely updates from your fevorite products.</Des>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button><SendIcon /></Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter;
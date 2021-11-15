import styled from "styled-components";

const Container = styled.div`
  background-color: #ebf5fb;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  border: 1px solid #E5E7E9;
  background-color: #fff;
  padding: 20px;
  width: 40%;
`;
const Title = styled.h1`
    font-weight: 400;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Des = styled.p`
    margin-top: 10px;
`;
const PrivacyTitle = styled.p`
    font-weight: 600;
    margin: 10px 0;
`;
const Button = styled.button`
    padding: 10px 40px;
    background-color: teal;
    border: none;
    color: #fff;
    font-weight: bold;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </Form>
        <Des>
          By creating an account. I concent to the processing of my personal
          data in accordance with the
        </Des>
        <PrivacyTitle>PRIVACY POLICY</PrivacyTitle>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;

import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

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
  border: 1px solid #e5e7e9;
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
const Link = styled.a`
  margin-top: 10px;
  display: flex;
  cursor: pointer;
`;
const Button = styled.button`
  padding: 10px 40px;
  background-color: teal;
  border: none;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const getData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    login(dispatch, user);
    console.log(user);
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            name="username"
            value={user.username}
            onChange={getData}
          />
          <Input
            placeholder="password"
            name="password"
            value={user.password}
            onChange={getData}
          />
        </Form>
        <Button onClick={handleClick} disabled={isFetching}>
          LOGIN
        </Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;

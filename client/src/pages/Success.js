import React from "react";
import { useNavigate } from "react-router";

const Success = () => {
  const navigate = useNavigate();

  console.log("success",navigate);

  return <h1>Payment Successful</h1>;
};

export default Success;

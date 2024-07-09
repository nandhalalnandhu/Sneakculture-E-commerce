import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";

const container = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledParagraph = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: black;
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
 color: #545252;
`;
const TextButton = styled.div`
  width: 100%;
  text-align: end;
  color: black;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: green;
  }
`;

const Signup = () => {
  return (
    <container>
      <div>
        <StyledParagraph> Sneak culture Account &#128075;</StyledParagraph>
        <Span>Please login with details here</Span>
      </div>
      <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
       
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <TextInput label="Password" placeholder="Enter your password " />
        <TextButton> Forget Password ?</TextButton>
        <Button text="Sign Up" />
      </div>
    </container>
  );
};

export default Signup;

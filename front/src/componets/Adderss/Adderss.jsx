import React, { useContext } from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";
import "./Adderss.css"

const Container = styled.div`
  padding: 20px 30px;
  height: fit-content;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 750px) {
    margin-top: 100px;
    padding: 20px 12px;
  }
`;


const Right = styled.div`
  /* flex: 1; */
  

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;

const Delivery = styled.div`
width: 300px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Adderss = () => {
  return (
    <Container>
      <Right>
        <Delivery>
          DeliveryDetails:
          <div>
            <div style={{ display: "flex", gap: "6px" }}>
              <TextInput small placeholder="First Name" />
              <TextInput small placeholder="Last Name" />
            </div>
            <TextInput small placeholder="Email Adderss" />
            <TextInput small placeholder="phone no.+91 xxxxx xxxxx" />
            <TextInput
              small
              textArea
              rows="5"
              placeholder="Complete Address (Address ,State, pincode)"
            />
          </div>
        </Delivery>
        <Delivery>
          Payment Details:
          <div>
            <TextInput small placeholder="Card Number" />
            <div style={{ display: "flex", gap: "6px" }}>
              <TextInput small placeholder="Expiry Date" />
              <TextInput small placeholder="CVV" />
            </div>
            <TextInput small placeholder="Card Holder name" />
          </div>
        </Delivery>
        <button className="btn-checkk">PLACE & ORDER</button>
      </Right>
    </Container>
  );
};

export default Adderss;

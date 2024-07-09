import React, { useContext } from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";
import { Mycont } from "../Context";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import "./Kart.css";
import smallAD from "../../Assets/caro/1.jpg";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px 30px;
  height: fit-content;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 750px) {
    margin-top: 50px;
    padding: 20px 12px;
  }
`;

const Section = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

// const Img = styled.img`
//   width: 100%;
//   height: 500px;
//   object-fit: cover;
//   max-width: 1200px;
// `;

const StyledParagraph = styled.p`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "center  ")};
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 32px;
  width: 100%;
  /* padding: 12px; */
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  /* background: red; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;
const Table = styled.div`
  font-size: 16px;
  display: flex;
  padding-right: 10px;
  align-items: center;
  padding-right: 40px;
  gap: 32px;
  ${({ head }) => head && `margin-bottom:22px`}
`;
const TableItem = styled.div`
  ${({ flex }) => flex && `flex:1;`}
  ${({ bold }) => bold && `font-weight:600; font-size:18px`}
  padding-right: 4px;
  gap: 20px;
`;
const Counter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
const Product = styled.div`
  display: flex;
  gap: 16px;
`;
const Img = styled.img`
  height: 80px;
  @media (max-width: 750px) {
    height: 50px;
  }
`;
const Details = styled.div``;
const Protitle = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 500;
`;
const ProDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;
// const Subtotal = styled.div`
//   font-size: 22px;
//   font-weight: 600;
//   display: flex;
//   justify-content: space-between;
// `;
const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Kart = () => {
  const { cartItems, setCartItems } = useContext(Mycont);

  const decrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const incrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  const Subtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.pric * item.quantity;
    }, 0);
  };
  const Total = () => {
    return cartItems.reduce((total, item) => {
      return total + item.pric * item.quantity + 120;
    }, 0);
  };
  const DeliveryChar = () => {
    return cartItems.reduce((total, item) => {
      return total + 120 * item.quantity;
    }, 0);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <StyledParagraph>Your Shopping Cart</StyledParagraph>
        <Wrapper>
          <Left>
            <div>
              <Table className="tabu">
                <TableItem bold flex>
                  Product
                </TableItem>
                <TableItem bold>Price</TableItem>
                <TableItem bold>Qn</TableItem>
                <TableItem bold>Subtotel</TableItem>
              </Table>
              <br />
              {cartItems.map((item, index) => (
                <>
                  <Table className="kkart">
                    <TableItem flex>
                      <Product>
                        <Img
                          src={item.Img}
                          onClick={() => navigate(`/more/${item.id}`)}
                        />
                        <Details>
                          <Protitle>{item.nam}</Protitle>
                          <ProDesc>Desc</ProDesc>
                          <ProSize>Size:8</ProSize>
                        </Details>
                      </Product>
                    </TableItem>

                    <TableItem>₹.{item.pric}</TableItem>
                    <TableItem>
                      <Counter>
                        <button
                          className="incre"
                          onClick={() => decrementQuantity(index)}
                        >
                          <FiMinus className="iccon" />
                        </button>

                        <span className="s">{item.quantity}</span>

                        <button
                          className="incre"
                          onClick={() => incrementQuantity(index)}
                        >
                          <FaPlus className="iccon" />
                        </button>
                      </Counter>
                    </TableItem>
                    <TableItem>
                      ₹.{Number(item.pric) * Number(item.quantity)}
                    </TableItem>
                  </Table>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="remo"
                  >
                    remove
                  </button>
                  <br />
                  <br />
                </>
              ))}
            </div>
          </Left>
          <Right>
            <div className="grandtotel">
              <h3>Items: {cartItems.length}</h3>
              <h3>Estimated Delivery & Handling: ₹{DeliveryChar()}</h3>
              <h2> Total: ₹{Subtotal()}</h2>
              <img
                className="lastdance"
                src="https://ps.w.org/woo-delivery/assets/banner-1544x500.png?rev=2421326"
                alt=""
                width={600}
              />
              <br />
              <br />
              <Link to="/checkout">
                <button className="btn-check">CHECK OUT</button>
              </Link>
            </div>
            {/* <Delivery>
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
            <Button text="place Order" small></Button> */}
          </Right>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default Kart;

import React, { useContext } from "react";
import "./Moredetails.css";
import styled from "styled-components";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Mycont } from "../Context";
import { useParams } from "react-router-dom";

function Moredetails() {

  const {  api, setCartItems, setWishList} = useContext(Mycont);

  const { id } = useParams();

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const handleAddToWishList = (newItem) => {
    setWishList((prevWish) => [...prevWish, newItem]); // Error can occur here
  };

  return (
    <Container>
      {api
        .filter((item) => item.id == id)
        .map((item, index) => (
          <Section>
            <Wrapper>
              <Left>
                <img
                  className="imagess"
                  src={item.Img}
                  alt=""
                />
              </Left>
              <Right>
                <div className="detailA">
                  <h4>
                    Memeber product
                    <div id="main-content">
                      <div>
                      <div className="StyledMenuItem">
                  <FavoriteRoundedIcon
                    onClick={() => handleAddToWishList(item)}
                    sx={{ fontSize: "20px", color: "red" }}
                  />{" "}
                </div>

                <div className="StyledMenuItem">
                  <AddShoppingCartOutlinedIcon
                    onClick={() => addToCart(item)}
                    sx={{ color: "inherit", fontSize: "20px" }}
                  />
                </div>
                      </div>
                    </div>
                  </h4>
                  <span className="namme">{item.nam}</span>

                  <span className="pricce"> INR.{item.pric}</span>
                  <br />
                  <span className="spa">incl. of taxes </span>
                  <span className="spa">
                    (Also includes all appilicable duties){" "}
                  </span>
                </div>
                <div className="BB">
                  <div className="sizz">6</div>
                  <div className="sizz">7</div>
                  <div className="sizz">8</div>
                  <div className="sizz">9</div>
                  <div className="sizz">10</div>
                  <div className="sizz">11</div>
                  <div className="sizz">12</div>
                </div>
              </Right>
            </Wrapper>
          </Section>
        ))}
    </Container>
  );
}

export default Moredetails;

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 100px;
  background: url(../../Assets/caro/2.jpg);
  height: fit-content;
  padding-top: 80px;
  /* overflow-y: scroll; */
  /* background-color: red; */
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
  align-self: center;
  justify-content: center;
  /* flex-direction: column; */
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;
const Right = styled.div`
  flex: 1;
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;

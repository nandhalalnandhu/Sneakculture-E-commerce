import React, { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import { Mycont } from "../Context";
import { useNavigate } from "react-router-dom";

function ProductCard() {

  const { itemss, setCartItems, setWishList ,api,records} = useContext(Mycont);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const handleAddToWishList = (newItem) => {
    setWishList((prevWish) => [...prevWish, newItem]);
  };
  const itemsToShow = itemss.slice(0,20);
  return (
    <>
      {itemsToShow.map((item, index) => (
        <div key={index}>
          <div className="Card">
            <div className="Top">
              <img
                className="ProCard-img"
                onClick={() => navigate(`/more/${item.id}`)}
                src={item.Img}
                alt=""
              />

              <div className="Menu">
                <div className="StyledMenuItem">
                  <FavoriteRoundedIcon
                    onClick={() => handleAddToWishList(item)}
                    sx={{ fontSize: "20px", color: "red" }}
                  />
                </div>

                <div className="StyledMenuItem">
                  <AddShoppingCartOutlinedIcon
                    onClick={() => addToCart(item)}
                    sx={{ color: "inherit", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="Rate">
                <Rating value={3.5} sx={{ fontSize: "14px" }} />
              </div>
            </div>

            <div className="Details">
              <div className="Title">{item.nam}</div>

              <div className="Desc">Good one</div>
              <div className="Price">
                INR.{item.pric} <span>1500</span>
                <div className="Percent">20% Off</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;

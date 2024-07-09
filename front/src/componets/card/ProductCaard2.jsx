import React, { useContext } from "react";
import "./ProductCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import { Mycont } from "../Context";
import { useNavigate } from "react-router-dom";

function ProductCaard2() {
  const { wishList, setCartItems, setWishList } = useContext(Mycont);

  const navigate = useNavigate();

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const removeFromCarty = (index) => {
    setWishList((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  return (
    <>
      {wishList?.map((item, index) => (
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
                  <DeleteIcon
                    onClick={() => removeFromCarty(index)}
                    sx={{ fontSize: "24px", color: "red" }}
                  />{" "}
                </div>

                <div
                  className="StyledMenuItem"
                  onClick={() => removeFromCarty(index)}
                >
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
              <div className="Title">{item.nam}</div>{" "}
              {/* Consider error handling for missing name */}
              <div className="Desc">Good one</div>
              <div className="Price">
                INR.{item.pric} <span>1500</span>{" "}
                {/* Consider error handling for missing price */}
                <div className="Percent">20% Off</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCaard2;

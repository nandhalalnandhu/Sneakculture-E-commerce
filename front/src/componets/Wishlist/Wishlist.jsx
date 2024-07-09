import React from "react";
import "./Wishlist.css";
import ProductCaard2 from "../card/ProductCaard2";

function Wishlist() {
  return (
    <div className="wishlist">
      <div className="Section">
        <div className="StyledParagraph">Your favourites</div>
        <div className="CardWrapperr">

          <ProductCaard2/>
          
          
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

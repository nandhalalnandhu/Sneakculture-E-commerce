import React from "react";
import "./Home.css";
import { category } from "../data";
import Cardcategory from "../card/Cardcategory";
import ProductCard from "../card/ProductCard";
import Category2 from "../card/Category2";

function Home() {
  return (
    <div className="home">
      <div className="Section" style={{ alignItems: "center" }}>
        {/* <p className="StyledParagraph">Shop by Brand</p> */}

        <div className="CardWrappers">
          <Cardcategory />
        </div>
      </div>

      <div className="Section" style={{ alignItems: "center" }}>
        <p className="StyledParagraph">Our Bestseller</p>
        <div className="CardWrapper">
          <ProductCard />
        </div>
        <br />
        <br />
        <div className="CardWrapper">
          {category.map((category) => (
            <Category2 category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

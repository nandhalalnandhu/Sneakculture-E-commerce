import React from "react";
import "./Category2.css";
import { category } from "../data";

const Category2 = ({ category }) => {
  return (
    <div class="card">
      <div class="top">
        <img className="Image" src={category.img} alt="" />
        <div class="menu">
          <button className="Button">{category.name}</button>
        </div>
        <span class="sale">{category.off}%</span>
      </div>
    </div>
  );
};

export default Category2;

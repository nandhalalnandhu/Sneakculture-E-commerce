import React from "react";
import Home from "./componets/Home/Home";
import Homecaro from "./componets/Home1/Homecaro";
import "../src/Mainhome.css"

function MainHome() {
  return (
    <div className="Mainhome">
      <Homecaro />
      <Home />
      
    </div>
  );
}

export default MainHome;

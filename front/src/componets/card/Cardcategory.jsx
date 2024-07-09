import React, { useContext } from "react";
import "./Cardcategory.css";
import { Mycont } from "../Context";

const Cardcategory = () => {
  const { itemss, setItemss, records, api } = useContext(Mycont);

  const filteritems = (catItem) => {
    const updateItems = records.filter((curItem) => {
      return curItem.brandz === catItem;
    });
    setItemss(updateItems);
  };

  return (
    <div className="filt">
      <button className="btn-filt" onClick={() => setItemss(records)}>
        ALL
      </button>
     
      <button className="btn-filt" onClick={() => filteritems("newbalance")}>
        NEW BALANCE
      </button>
      <button className="btn-filt" onClick={() => filteritems("nike")}>
        NIKE
      </button>
      <button className="btn-filt" onClick={() => filteritems("adidas")}>
        ADIDAS
      </button>
      <button className="btn-filt" onClick={() => filteritems("vans")}>
        VANS
      </button>
    </div>
  );
};

export default Cardcategory;

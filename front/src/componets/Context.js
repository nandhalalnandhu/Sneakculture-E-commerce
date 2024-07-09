import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Mycont = createContext();

const Context = ({ children }) => {
  // State for API data
  const [api, setApi] = useState([]);
  const [records, setRecords] = useState([]); // Search filter
  const [itemss, setItemss] = useState([]);

  // Fetch data from API on initial mount
  useEffect(() => {
    axios
      .get("https://sneakculure.onrender.com/nand")
      .then((res) => {
        setApi(res.data);
        setRecords(res.data);
        setItemss(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Get cart items from localStorage
  const getCartFromStorage = () => {
    try {
      const localStorageCart = localStorage.getItem("cart");
      const cartLocal = JSON.parse(localStorageCart);

      // Check if cartLocal is truthy (not null, undefined, or false)
      if (cartLocal) {
        return cartLocal;
      } else {
        console.error("Cart data is null or undefined");
        return [];
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  };

  // State for cart items and update localStorage on change
  const [cartItems, setCartItems] = useState(getCartFromStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Get wishlist items from localStorage
  const getWishFromStorage = () => {
    try {
      const localStorageWish = localStorage.getItem("wish");
      const wishLocal = JSON.parse(localStorageWish);

      // Check if wishLocal is truthy (not null, undefined, or false)
      if (wishLocal) {
        return wishLocal;
      } else {
        console.error("Wishlist data is null or undefined");
        return [];
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  };

  // State for wishlist items and update localStorage on change
  const [wishList, setWishList] = useState(getWishFromStorage);

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wishList));
  }, [wishList]);

  // Context provider value with all states and setters
  return (
    <Mycont.Provider
      value={{
        api,
        cartItems,
        setCartItems,
        wishList,
        setWishList,
        records,
        setRecords,
        itemss,
        setItemss,
      }}
    >
      {children}
    </Mycont.Provider>
  );
};

export default Context;

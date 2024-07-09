import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import "./Pop.css";
import logo from "../../Assets/Logo.png";
import { RiHome7Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import me from "../../Assets/me.jpg";
import { Link, Outlet } from "react-router-dom";
import SignIn from "../Authjsx/Signin";
import Signup from "../Authjsx/Signup";
import { HiMiniXCircle } from "react-icons/hi2";
import styled from "styled-components";
import { FaBarsStaggered } from "react-icons/fa6";
import { Mycont } from "../Context";
import { FaShoppingBag } from "react-icons/fa";
import { Api, Filter } from "@mui/icons-material";

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  top: 0px;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100)")};
  /* border-radius: 0 0 20px 20px; */
  box-shadow: 0 0 10px rgba (0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

function Navbar() {
  const [login, setLogin] = useState(true);

  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
    setIsOpen(false);
  };

  if (model) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const { api, cartItems, wishList,  setRecords } = useContext(Mycont);

  const Filter = (event) => {
    setRecords(
      api.filter((f) => f.brandz.toLowerCase().includes(event.target.value))
    );
  };

  return (
    <>
      <div className="Nav">
        <FaBarsStaggered className="bar" onClick={handleClick} />

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Link onClick={handleLinkClick} className="linku" to="/">
              <div className="login-side">Home</div>
            </Link>
            <Link onClick={handleLinkClick} className="linku" to="/shop">
              <div className="login-side">Shop</div>
            </Link>

            <Link onClick={handleLinkClick} className="linku" to="/cart">
              <div className="login-side">Cart {cartItems.length} </div>
            </Link>

            <Link onClick={handleLinkClick} className="linku" to="/wishlist">
              <div className="login-side">Favourite {wishList.length}</div>
            </Link>

            <div className="login-side" onClick={toggleModel}>
              Log in / Register
            </div>

            <button className="close-btn" onClick={handleClick}>
              close
            </button>
          </MobileMenu>
        )}

        <div className="NavbarContainer">
          <div className="NavLogo">
            <img className="logo-img" src={logo} alt="" height={50} />
          </div>

          <div className="NavItems">
            <span className="Navlink">
              {/* <FaSearch className="icon-nav" /> */}
              <div class="input-container">
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Search Sneakerzz...."
                  onChange={Filter}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect fill="white" height="24" width="24"></rect>{" "}
                    <path
                      fill=""
                      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </span>

            <span className="Navlink">
              <Link to="/">
                <RiHome7Fill className="icon-navv" />
              </Link>
            </span> 

            
            <span className="Navlink">
              <Link to="/shop">
                < FaShoppingBag className="icon-nav" />
              </Link>
            </span>

            <span className="Navlink">
              <Link className="linkuz" to="/wishlist">
                <FaHeart className="icon-nav" />
                {wishList.length}
              </Link>
            </span>

            <span className="Navlink">
              <Link className="linkuz" to="/cart">
                <BsFillCartPlusFill className="icon-nav" />
                {cartItems.length}
              </Link>
            </span>
          </div>

          <div className="ButtonContainer">
            <span className="Navlinkk">
              <Link>
                {/* <FaSearch className="icon-nav" /> */}
                <div class="input-container">
                  <input
                    type="text"
                    name="text"
                    class="input"
                    placeholder="Search Sneaker"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill=""
                    viewBox="0 0 24 24"
                    class="icon"
                  >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect fill="white" height="24" width="24"></rect>{" "}
                      <path
                        fill=""
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </Link>
            </span>

            <span className="Navlinkk">
              <Link to="/">
                <RiHome7Fill className="icon-navv" />
              </Link>
            </span>

            <span className="Navlinkk">
              <Link className="linkuz" to="/cart">
                <BsFillCartPlusFill className="icon-nav" />
                {cartItems.length}
              </Link>
            </span>

            <div className="login-user">
              <img className="log-me" src={me} alt="" />
            </div>

            <button className="Nav-Btn" onClick={toggleModel}>
              Log in
            </button>

            {model && (
              <div className="modal">
                <div onClick={toggleModel} className="overlay"></div>
                <div className="modal-content">
                  <>
                    <div className="right">
                      {login ? (
                        <>
                          <SignIn />
                          <p className="text">
                            Don't have an account?{" "}
                            <div
                              className="text-btn"
                              onClick={() => setLogin(false)}
                            >
                              Sign Up
                            </div>
                          </p>
                        </>
                      ) : (
                        <>
                          <Signup />
                          <p className="text">
                            Already have an account?{" "}
                            <div
                              className="text-btn"
                              onClick={() => setLogin(true)}
                            >
                              Sign In
                            </div>
                          </p>
                        </>
                      )}
                    </div>
                  </>
                  <button className="close-modal" onClick={toggleModel}>
                    <HiMiniXCircle className="xxx" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaQuestionCircle,
  FaStar,
  FaCreditCard,
  FaAngleDown,
} from "react-icons/fa";
import AccountDropdown from "../Account/accountDropdown";
import "../Account/AccountDropdown.css";
import Help from "../Help/help";
import "../Help/help.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({cartCount}) => {
  return (
    <nav className="navbar">
      <nav className="top-nav">
        <span className="sell">
          <span className="starbox">
            <FaStar color="white" size={12} />
          </span>
          <a href="/sellon" className="orangea">
            Sell on Jumia
          </a>
        </span>

        <div className="midtop-nav">
          <div className="jumia-top">
            <h3>JUMIA</h3>
            <span className="starbox">
              <FaStar color="white" size={10} />
            </span>
          </div>
          <span className="opay">
            <FaCreditCard />
            PAY
          </span>
          <span className="delivery">
            <span className="starboxx">
              <FaStar color="rgb(247, 245, 245)" size={10} />
            </span>
            <h3>DELIVERY</h3>
          </span>
        </div>
      </nav>
      <nav className="bottom-nav">
        <span className="jumia-logo">
          <a class="jumia-txt" href="/home" style={{ color: "black" }}>
            JUMIA
          </a>
          <span className="starboxy">
            <FaStar color="white" size={15} />
          </span>
        </span>
        <div className="searchbox">
          <div>
            <FaSearch />
          </div>
          <input
            type="text"
            className="search"
            placeholder="Search products, brands and categories"
          />
        </div>
        <button className="search-btn">Search</button>
        <div className="nav-links">
          <span className="account">
            <AccountDropdown />
          </span>
          <span className="account">
            <Help />
          </span>
          <Link to = "/ordered" style={{color:"black", textDecoration:"none"}}>
          <div style={{ position: "relative" }}>
            <span className="account" style={{fontSize:"15px"}}>
              {/* <div className="relative"> */}
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -4,
                    right: 57,
                    background: "#f78503",
                    color: "white",
                    borderRadius: "50%",
                    padding: "1px 4px",
                    fontSize: "11px",
                  }}
                >
                  {cartCount}
                </span>
              )}
              {/* {cartCount > 0 && (
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
             </span>
              )} */}
              {/* </div> */}
              Cart <FaAngleDown />
            </span>
          </div>
          </Link>
        </div>
      </nav>
    </nav>
  );
};

<div className="nav">
  <div className="logo">Jumia Clone</div>
  <div className="search-bar">
    <input type="text" placeholder="Search products..." />
    <button>🔍</button>
  </div>
  <nav className="nav-links">
    <a href="/">Deals</a>
    <a href="/">Categories</a>
    <a href="/">Cart</a>
  </nav>
</div>;

export default Header;

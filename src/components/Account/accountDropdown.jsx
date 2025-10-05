import React from "react";
import { useState } from "react";
import {
  FaUser,
  FaClipboardList,
  FaHeart,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import "./AccountDropdown.css";

function AccountDropdown() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div
      className="account-dropdown"
      onClick={() => {
        handleToggle();
       
      }}
      // onMouseLeave={() => setOpen(false)}
    >
      {!open ? (
        <button className="account-button">
          <FaUser size={20} /> <h3> Account </h3>
          <FaAngleDown />
        </button>
      ) : (
        <button className="account-button-alt">
          <FaUser size={20} /> <h3> Account </h3>
          <FaAngleUp />
        </button>
      )}
      {open && (
        <div className="dropdown-menu">
          <div className="box-signin">
            <button className="sign-in">Sign In</button>
          </div>
          <ul>
            <li>
              <FaUser />
              My Account
            </li>
            <li>
              <FaClipboardList />
              Orders
            </li>
            <li>
              <FaHeart />
              WishList
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccountDropdown;

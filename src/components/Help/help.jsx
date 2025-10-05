import React from "react";
import { useState } from "react";
import { FaUser, FaAngleDown, FaCommentAlt, FaAngleUp} from "react-icons/fa";
import "./help.css";

function Help() {
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
          <FaUser size={20} /> <h3>Help</h3>
          <FaAngleDown />
        </button>
      ) : (
        <button className="account-button-alt">
          <FaUser size={20} /> <h3>Help</h3>
          <FaAngleUp />
        </button>
      )}
      {open && (
        <div className="dropdown-menu">
          <ul>
            <li>Help center</li>
            <li>Place an 0rder</li>
            <li>Track an Order</li>
            <li>Cancel an order</li>
            <li>Returns & Refunds</li>
          </ul>
          <div className="box-signin">
            <button className="sign-in"><FaCommentAlt size={20}/>Live Chat</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Help;
